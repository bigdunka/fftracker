function tracking_interface() {
  let timerID;
  let module = {};

  module.network = null;
  module.auto_update_func = () => {};

  module.status = status
  function status() {
    if (module.network && module.network.device && module.network.device.attached > -1) {
         return true;
    }
    return false;
  }

  module.getConnected = getConnected
  function getConnected(port, errorhandler) {
    port = port || 8080;
    console.log;
    module.network = new create_network(console, port, errorhandler, isReact=false);
    module.network.onConnect().then(
        () => { module.get_objectives_from_metadata(); })
      .then(
        () => { this.timerID = setInterval( module.keep_updating_kis, 100); },
        () => { console.log("Failure on connection"); }
    );
  }

  module.disconnect = disconnect
  function disconnect() {
    if (this.timerID) {
      clearInterval(timerID);
    }
    module.network.disconnect();
  }

  module.auto_set_live_objectives = (values) => {}
  module.set_live_objectives = set_live_objectives;
  function set_live_objectives(){
    module.auto_set_live_objectives(module.objectives);
  }

  module.objectives = null;
  module.flags = null; // WARNING: Flags will be <hidden> on a mystery seed
  module.get_objectives_from_metadata = get_objectives_from_metadata;
  async function get_objectives_from_metadata() {
      return module.network.snes.send(JSON.stringify({
         "Opcode" : "GetAddress",
         "Space" : "SNES",
         "Operands": ["0x1FF000", '400']
      })).then(
        (event) => {
         return event.data.arrayBuffer()
       }).then(
       (metadata) => {
         let x = new Uint8Array(metadata);
         let bytes = x[0] + 256 * x[1];
         let meta = new TextDecoder("utf-8").decode(x.slice(4,bytes+4));
         console.log(meta.objective);
         module.objectives = JSON.parse(meta).objectives;
         module.flags = JSON.parse(meta).flags.toUpperCase();
         module.set_live_objectives();
         return;
     });
  }

  // This can handle arbitrary length objectives, but doesn't appear to work on emulators
  module.get_objectives_from_file_metadata = get_objectives_from_file_metadata;
  function get_objectives_from_file_metadata() {
    module.network.snes.send(module.network.snes.create_message("Info")
  ).then((out) => {
     let infoArray = JSON.parse(out.data).Results;
     let filename = infoArray[2];
     return filename;
   }).then((filename) => {
     return module.network.snes.getFile(
       module.network.snes.create_message("GetFile",[filename]))
   }).then((metadata) => {
     module.objectives = JSON.parse(metadata).objectives;
     module.flags = JSON.parse(metadata).flags.toUpperCase();
     module.set_live_objectives();
     return;
   });
  }

/*
  module.keep_updating_objectives = keep_updating_objectives;
  function keep_updating_objectives() {
    if (!module.objectives) {
      return;
    }
    let count = module.objectives.length.toString(16);
    module.network.snes.send(JSON.stringify({
       "Opcode" : "GetAddress",
       "Space" : "SNES",
       "Operands": ["0xF51520", count]
    })).then(
      (event) => {
       return event.data.arrayBuffer()
     }).then(
       (ab) => {
         let objectiveFlags = new Uint8Array(ab);
         for (let i=0; i < module.objectives.length; i++) {
            module.set_objective(module.objectives[i], !!objectiveFlags[i]);
         }
         module.auto_update_func();
       },
       (err) => { });
  }
  */

  module.auto_set_objective = (a,b) => {}
  module.set_objective = set_objective
  function set_objective(index, truth=True) {
    module.auto_set_objective(index, truth);
    //console.log("lki:" + index + ":" + truth);
  }

  module.keep_updating_kis = keep_updating_kis
  function keep_updating_kis() {
    let count = 0x20;
    if (module.objectives) {
      count += module.objectives.length;
    }
    let hexCount = count.toString(16);
    module.network.snes.send(JSON.stringify({
       "Opcode" : "GetAddress",
       "Space" : "SNES",
       "Operands": ["0xF51500", hexCount]
    })).then(
      (event_ki) => {
       return event_ki.data.arrayBuffer()
     }).then(
       (arrBuf) => {
         let memory = new Uint8Array(arrBuf);
         for (let i = 0; i <= 2; i++) {
            for (let b = 0; b < 8; b++) {
              let index = (i * 8 + b);
              if (index > 0x10) continue;
              let truth = !!(memory[i] & (1 << b));
              set_ki(index, truth);
            }
          }
          for (let i = 3; i <= 5; i++) {
             for (let b = 0; b < 8; b++) {
               let index = (i * 8 + b) - 24;
               if (index > (0x10)) continue;
               let truth = !!(memory[i] & (1 << b));
               set_used_ki(index, truth);
             }
           }
           for (let i = 0x14; i <= 0x1B; i++) {
             for (let b = 0; b < 8; b++) {
               let index = (i * 8 + b) - 0x14*8;
               if (index > (0x5D)) continue;
               let truth = !!(memory[i] & (1 << b));
			   if (keyitemlocations[ki_location_map[index + 0x20]] != 4) {
               set_loc_ki(index + 0x20, truth);
			   }
             }
           }
           if (module.objectives) {
             for (let i=0; i < module.objectives.length; i++) {
               module.set_objective(module.objectives[i], !!memory[0x20 + i]);
             }
           }
           module.auto_update_func()
     },
     (err) => { /* console.log("bleh" + err) */ });
   }

   module.auto_set_ki = (a,b) => {}
   module.set_ki = set_ki
    function set_ki(index, truth=True) {
      module.auto_set_ki(index, truth);
      //console.log("ki:" + index + ":" + truth);
    }
    module.auto_set_used_ki = (a,b) => {}
    module.set_used_ki = set_used_ki
    function set_used_ki(index, truth=True) {
      module.auto_set_used_ki(index, truth);
      //console.log("uki:" + index + ":" + truth);
    }
    module.auto_set_loc_ki = (a,b) => {}
    module.set_loc_ki = set_loc_ki
    function set_loc_ki(index, truth=True) {
      module.auto_set_loc_ki(index, truth);
      //console.log("lki:" + index + ":" + truth);
    }
    return module;
}

//7E:1500-1502 : Found key items (1 bit per item)
//7E:1503-1505 : Used key items (1 bit per item)
//7E:1510-151F : Checked potential key item locations (1 bit per location)
//7E:1520-15?? : Objectives, one byte per objective
//70:7080-70A1 : Locations where each key item was found (2 bytes per item)
