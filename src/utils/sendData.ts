import { deferred } from "../../deps.ts";

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

  var p = deferred<Uint8Array>();
  var timeout = setTimeout(
    () => p.reject("Source server did not respond in time"),
    1000,
  );
  socket.receive().then(([buffer, _]) => {
    clearTimeout(timeout);
    p.resolve(buffer);
  });

  socket.send(data, { transport: "udp", port: port, hostname: ip });

  return p;
}
