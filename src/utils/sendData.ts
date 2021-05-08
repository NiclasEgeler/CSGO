export async function sendData(
  data: Uint8Array,
  ip: string,
  port: number,
): Promise<Uint8Array> {
  const socket = await Deno.listenDatagram({
    port: 0,
    transport: "udp",
    hostname: "0.0.0.0",
  });

  const retPromise = new Promise<Uint8Array>((resolve, reject) => {
    var timeout = setTimeout(
      () => reject("Source server did not respond in time"),
      1000,
    );
    socket.receive().then(([buffer, addr]) => {
      clearTimeout(timeout);
      resolve(buffer);
    });
  });
  socket.send(data, { transport: "udp", port: port, hostname: ip });

  return retPromise;
}
