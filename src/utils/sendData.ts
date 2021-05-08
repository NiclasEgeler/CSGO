import { Reader } from './reader.ts'


export async function sendData(
  data: Uint8Array,
  ip: string,
  port: number,
): Promise<number> {
  const socket = await Deno.listenDatagram({
    port: 0,
    transport: "udp",
    hostname: "0.0.0.0",
  });

  //const add = Deno.NetAddr = {transport: "udp", port: 8125, hostname: "1.2.3.4"};
  //NetAddr
  socket.receive().then(([buffer, addr]) => {
      var reader = new Reader(buffer);
      reader.readByte();
      reader.readByte();
      reader.readString();
      reader.readString();
      reader.readString();
      reader.readString();
  });

  socket.send(data, { transport: "udp", port: port, hostname: ip });

  await console.log(
    data.toString() + " " + ip.toString() + " " + port.toString(),
  );

  return -1;
  // var socket = createSocket('udp4');
  //     socket.send(data, port, ip, (err) => {
  //         if (err) {
  //             socket.close();
  //             console.log(err)
  //         }
  //     });

  // return new Promise((resolve, reject) => {
  //     var wait = setTimeout(() => {
  //         reject();
  //     }, 300);

  //     socket.on('error', (err) => {
  //         console.log(err)
  //         console.log('Closing socket...')
  //         socket.close();
  //     })

  //     socket.on('message', (msg: Buffer, rinfo: RemoteInfo) => {
  //         clearTimeout(wait);
  //         resolve({
  //             buffer: msg,
  //             remoteInfo: rinfo
  //         });
  //         socket.close();
  //     });
  // })
}
