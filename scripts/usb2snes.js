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

    return methods;
}
