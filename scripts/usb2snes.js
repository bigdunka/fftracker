function usb2snes() {
    const methods = {};

    let ws = null;
    let busy = false;

    methods.get_ws = get_ws;
    function get_ws() {
        return ws;
    }

    methods.clearBusy = clearBusy;
    function clearBusy() {
        busy = false;
    }

    methods.create_message = create_message;
    function create_message(opcode, operands, space = "SNES") {
        return JSON.stringify({
            "Opcode": opcode,
            "Space": space,
            "Flags": null,
            "Operands": operands
        });
    }

    methods.connect = connect;
    function connect(url) {
        return new Promise(function (resolve, reject) {
            if (busy) {
                reject("BUSY");
            }

            busy = true;
            var socket = new WebSocket(url);
            socket.onopen = function () {
                ws = socket;
                busy = false;
                resolve(socket);
            };

            socket.onerror = function (err) {
                busy = false;
                reject(err);
            };
        });
    }

    methods.send = send;
    async function send(msg, noReply = false, timeOut = 1) {
        return new Promise(function (resolve, reject) {
            if (busy) {
                reject("BUSY");
            }

            busy = true;
            ws.send(msg);

            if (noReply) {
                busy = false;
                setTimeout(function () { resolve(true); }, timeOut);
                return;
            } else {
                setTimeout(function () {
                    busy = false;
                    reject(false);
                }, 1000);
            }

            ws.onmessage = function (event) {
                busy = false;
                resolve(event);
            };

            ws.onerror = function (err) {
                busy = false;
                reject(err);
            };
        });
    }

    methods.sendBin = sendBin;
    async function sendBin(msg, size) {
        return new Promise(async function (resolve, reject) {

            if (busy) {
                reject("BUSY");
                return;
            }

            busy = true;
            let outputBuffer = null;

            ws.onmessage = async (event) => {
                try {
                    let buf = await readAsArrayBuffer(event.data);
                    let arrayBuffer = new Uint8Array(buf);

                    if (outputBuffer === null) {
                        outputBuffer = arrayBuffer;
                    } else {
                        let tmpBuffer = new Uint8Array(outputBuffer.byteLength + arrayBuffer.byteLength);
                        for (let i = 0; i < tmpBuffer.byteLength; ++i) {
                            tmpBuffer[i] = (i < outputBuffer.byteLength) ? outputBuffer[i] : arrayBuffer[i - outputBuffer.byteLength];
                        }
                        outputBuffer = tmpBuffer;
                    }

                    if (outputBuffer.byteLength === size) {
                        busy = false;
                        resolve(outputBuffer);
                    }
                } catch (err) {
                    busy = false;
                    reject(err);
                }
            };

            ws.onerror = function (err) {
                busy = false;
                reject(err);
            };

            ws.send(msg);
        });
    }

    methods.runCmd = runCmd;
    async function runCmd(data) {
        return new Promise(async function (resolve, reject) {
            try {
                let size = data.byteLength.toString(16);
                let message = create_message("PutAddress", ["2C01", size, "2C00", "1"], "CMD");
                let ok = await send(message, true);
                if (ok) {
                    let newArray = Array.from(data);
                    newArray.push(0xEA);
                    ok = await send(new Blob([new Uint8Array(newArray)]), true);
                    if (ok) {
                        resolve(true);
                    } else {
                        reject("Error while sending binary data for command");
                    }
                } else {
                    reject("Error during PutAddress for command");
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    methods.readData = readData;
    async function readData(address, size) {
        return new Promise(async function (resolve, reject) {
            try {
                let message = create_message("GetAddress", [address.toString(16), size.toString(16)]);
                let response = await sendBin(message, size);
                resolve(response);
            }
            catch (err) {
                reject("Could not read data from device", err);
            }
        });
    }

    methods.writeData = writeData;
    async function writeData(address, data) {
        return new Promise(async function (resolve, reject) {
            try {
                let size = data.byteLength.toString(16);
                let message = create_message("PutAddress", [address.toString(16), size]);
                let ok = await send(message, true);
                if (ok) {
                    try {
                        ok = await send(new Blob([data]), true, 10);
                        if (ok) {
                            resolve(true);
                        }
                        else {
                            reject("Error sending binary data");
                        }
                    } catch (err) {
                        reject("Error sending binary data");
                    }
                } else {
                    reject("Error in PutAddress request");
                }
            }
            catch (err) {
                reject("Could not write data to usb2snes device", err);
            }
        });
    }

    methods.writeRam = writeRam;
    /* Helper function for RAM writes, converts write to putCmd if on console */
    async function writeRam(address, data, snes = true) {
        return new Promise(async function (resolve, reject) {
            try {
                if (snes) {
                    let opcodes = [0x48, 0x08, 0xC2, 0x30]; // PHA : PHP : REP #$30
                    for (let i = 0; i < data.byteLength; i += 2) {
                        if (data.byteLength - i === 1) {
                            opcodes = opcodes.concat([0xE2, 0x20]);    // SEP #$20
                            opcodes = opcodes.concat([0xA9, data[i]]); // LDA #$xx
                            let target = (address + 0x7E0000) + i;
                            opcodes = opcodes.concat([0x8F, (target & 0xFF), (target >> 8) & 0xFF, (target >> 16) & 0xFF]); // STA.L $xxyyzz
                            opcodes = opcodes.concat([0xC2, 0x30]); // REP #$30
                        } else {
                            opcodes = opcodes.concat([0xA9, data[i], data[i + 1]]); //LDA #$xxyy
                            let target = (address + 0x7E0000) + i;
                            opcodes = opcodes.concat([0x8F, (target & 0xFF), (target >> 8) & 0xFF, (target >> 16) & 0xFF]); // STA.L $xxyyzz
                        }
                    }
                    opcodes = opcodes.concat([0x9C, 0x00, 0x2C, 0x28, 0x68, 0x6C, 0xEA, 0xFF]); // STZ $2C00 : PLA : PLP : JMP ($FFEA)
                    console.log(new Uint8Array(opcodes));
                    let ok = await runCmd(new Uint8Array(opcodes));
                    resolve(ok);
                } else {
                    let ok = await writeData(address + 0xF50000, data);
                    resolve(ok);
                }
            }
            catch (err) {
                reject("Could not write data to usb2snes device:" + err);
            }
        });
    }

    async function readAsArrayBuffer(blob) {
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
            fileReader.onerror = () => {
                fileReader.abort();
                reject(new DOMException('Error parsing data'));
            };

            fileReader.onload = (e) => {
                resolve(e.target.result);
            };

            fileReader.readAsArrayBuffer(blob);
        });
    }

    return methods;
}
