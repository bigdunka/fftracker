function create_network(parent, isReact = true) {
    const snes = new usb2snes();

    let socket = null;

    let disconnecting = true;

    const device = initial_device();

    updateState();

    function initial_device() {
        return {
            state: 0,
            app_version: '',
            list: [],
            attached: -1, // Index of attached
        };
    }

    function updateState() {
        if (isReact) {
          parent.setState(_.cloneDeep(device));
        }
    }

    function socket_onclose() {
        parent.log('Connection closed');
        snes.clearBusy();

        if (device.state !== 0) {
            setTimeout(onConnect, 1000);
            parent.log('Trying to reconnect');
        }

        Object.assign(device, initial_device());
        updateState();
    }

    async function onConnect() {
        disconnecting = false;
        try {
            if (device.state === 1) {
                device.state = 0;
                device.attached = -1;
                updateState();
                socket.close();
                return;
            }

            socket = await snes.connect('ws://localhost:8080');
            socket.onclose = socket_onclose;

            parent.log('Connected to websocket');
            device.state = 1;
            updateState();

            let response;

            response = await snes.send(snes.create_message('AppVersion', []));
            const app_version = JSON.parse(response.data).Results;

            device.app_version = app_version[0];
            updateState();

            response = await snes.send(snes.create_message('DeviceList', []));
            const device_list = JSON.parse(response.data).Results;

            device.list = device_list.map(name => ({ name, info: null }));
            updateState();

            if (device.list.length === 0) {
                /* Set to 1 to signal a reconnect to socket_onclose */
                device.state = 1;
                device.attached = -1;
                updateState();
                socket.close();
                return;
            }

            try {
                let i = -1;
                for (const name of device_list) {
                    i += 1;
                    device.list[i].info = JSON.stringify(await deviceInfo(name));
                    if (device.list[i].info) {
                      device.attached = i;
                    }
                    updateState();
                }
            } catch (error) {
                parent.log(`Could not attach to device: ${error}`);
                /* Set to 1 to signal a reconnect to socket_onclose */
                device.state = 1;
                device.attached = -1;
                updateState();
                socket.close();
            }
        }
        catch (error) {
            parent.log(`Could not connect to the websocket, retrying: ${error}`);
            device.state = 0;
            device.attached = -1;
            updateState();
            setTimeout(onConnect, 2000);
        }
    }

    async function disconnect() {
      disconnecting = true;
      device.state = 0;
      device.attached = -1;
      socket.close();
      updateState();
    }

    async function deviceInfo(device) {
        const attached = await snes.send(snes.create_message('Attach', [device]), true, 500);
        if (attached === true) {
            const response = await snes.send(snes.create_message('Info', []));
            return JSON.parse(response.data).Results;
        }
    }

    return { onConnect , disconnect,  snes };
}

// Probably not needed, but left here just in case
function ushort_le_value(array, offset) {
    return array[offset] + (array[offset + 1] << 8);
}

function ushort_le_bytes(x) {
    return [x & 0xFF, (x >> 8) & 0xFF];
}
// ---
