let network_kis;
let timerID;
let auto_update_func = () => {};
function set_auto_update_func(func) {
  auto_update_func = func;
}

function getConnected() {
  network_kis = create_network(console, isReact=false);
  network_kis.onConnect().then(
    () => { this.timerID = setInterval( keep_updating_kis, 100) },
    () => {console.log("Failure") }
  );
}

function disconnect() {
  if (timerID) {
    clearInterval(timerID);
  }
  network_kis.disconnect();
}

function keep_updating_kis() {
  network_kis.snes.send(JSON.stringify({
     "Opcode" : "GetAddress",
     "Space" : "SNES",
     "Operands": ["0xF51500", "20"]
  })).then(
    (event_ki) => {
     return event_ki.data.arrayBuffer()
   }).then(
     (ab_ki) => {
       let memory_ki = new Uint8Array(ab_ki);
       for (let i = 0; i <= 2; i++) {
          for (let b = 0; b < 8; b++) {
            let index = (i * 8 + b);
            if (index > 0x10) continue;
            let truth = !!(memory_ki[i] & (1 << b));
            set_ki(index, truth);
          }
        }
        for (let i = 3; i <= 5; i++) {
           for (let b = 0; b < 8; b++) {
             let index = (i * 8 + b) - 24;
             if (index > (0x10)) continue;
             let truth = !!(memory_ki[i] & (1 << b));
             set_used_ki(index, truth);
           }
         }
         for (let i = 0x14; i <= 0x1B; i++) {
           for (let b = 0; b < 8; b++) {
             let index = (i * 8 + b) - 0x14*8;
             if (index > (0x5D)) continue;
             let truth = !!(memory_ki[i] & (1 << b));
             set_loc_ki(index + 0x20, truth);
           }
         }
         auto_update_func()
   },
   (err) => { console.log("bleh" + err) })
 }

  function set_ki(index, truth=True) {
    auto_set_ki(index, truth);
    //console.log("ki:" + index + ":" + truth);
  }
  function set_used_ki(index, truth=True) {
    //console.log("uki:" + index + ":" + truth);
  }
  function set_loc_ki(index, truth=True) {
    auto_set_loc_ki(index, truth);
    //console.log("lki:" + index + ":" + truth);
  }


//7E:1500-1502 : Found key items (1 bit per item)
//7E:1503-1505 : Used key items (1 bit per item)
//7E:1510-151F : Checked potential key item locations (1 bit per location)
//70:7080-70A1 : Locations where each key item was found (2 bytes per item)
