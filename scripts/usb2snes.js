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

    methods.getFile = getFile;
    async function getFile(msg, noReply = false, timeOut = 1) {
        return new Promise(function (resolve, reject) {
            if (busy) {
                reject("BUSY");
            }

            busy = true;

           let fileLength = 0x200000;
           let fileSoFar = 0;
           let fileMetadataPromise = new Promise((resolve, reject) => { resolve({start: 0, length: 0}); });
           let fileMetadataStart = 0;
           let fileMetadataLength = 0;
           let fileMetadataSoFar = 0;
           let fileBits = [];

            ws.onmessage = function (event) {
                if(event.data instanceof Blob) {
                  // binary frame
                  let myBlob = event.data;
                  if (fileSoFar + myBlob.size > 0x1FF000) {
                    if (fileSoFar <= 0x1FF000) {
                      let asyncFileSoFar = fileSoFar;
                      // This is the first chunk that might have the data we Needs
                      fileMetadataPromise = fileMetadataPromise.then(() => {
                        return myBlob.arrayBuffer().then(ab => {
                          let possibleMetadataLength = new Uint32Array(ab);
                          let index = 0x1FF000 - asyncFileSoFar;
                          fileMetadataLength = possibleMetadataLength[index/4];
                          fileMetadataStart = index+4;
                          return {start: fileMetadataStart, length: fileMetadataLength}
                      }) });
                    }
                    fileBits.push(myBlob);
                    fileMetadataSoFar += myBlob.size;
                  }
                  fileSoFar += myBlob.size;
                  if (fileSoFar >= fileLength) { // This is the last chunk time to make that callout
                    resolve(fileMetadataPromise.then((metadataStats) => {
                      if ( fileMetadataSoFar - metadataStats.start >= metadataStats.length) {
                        let metadataBlobAndStuff = new Blob(fileBits);
                        let metadataBlob = metadataBlobAndStuff.slice(metadataStats.start,metadataStats.start+metadataStats.length);
                        busy = false;
                        let textPromise = metadataBlob.text();
                        return textPromise;
                      }
                    }));
                  }
                } else {
                  // text frame: the file length
                 fileLength = parseInt(JSON.parse(event.data)["Results"][0], 16);
                }
            };

            ws.onerror = function (err) {
                busy = false;
                reject(err);
            };

            ws.send(msg);
        });
    }

    return methods;
}
