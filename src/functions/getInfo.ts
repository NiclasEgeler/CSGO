import { sendData } from "../utils/sendData.ts";
import { A2S_INFO } from "../models/buffer.ts";
import { Reader } from "../utils/reader.ts";
import { IServerInfo } from "../models/info.ts";

export async function getInfo(ip: string, port: number): Promise<IServerInfo> {
  const reader = new Reader(await sendData(A2S_INFO, ip, port));
  const serverInfo: IServerInfo = {
    header: String.fromCharCode(reader.readByte()),
    protocol: reader.readByte(),
    name: reader.readString(),
    map: reader.readString(),
    folder: reader.readString(),
    game: reader.readString(),
    id: reader.readShort(),
    players: reader.readByte(),
    maxPlayers: reader.readByte(),
    bots: reader.readByte(),
    serverType: String.fromCharCode(reader.readByte()),
    environment: String.fromCharCode(reader.readByte()),
    visibility: !!reader.readByte(),
    vac: !!reader.readByte(),
    version: reader.readString(),
  };

  if (reader.hasNext()) {
    serverInfo.extraDeltaFlag = reader.readByte();

    if ((serverInfo.extraDeltaFlag & 0x80) > 0) {
      serverInfo.port = reader.readShort();
    }

    if ((serverInfo.extraDeltaFlag & 0x10) > 0) {
      serverInfo.steamId = reader.readLongLong();
    }

    if ((serverInfo.extraDeltaFlag & 0x40) > 0) {
      serverInfo.portSourceTv = reader.readShort();
      serverInfo.nameSourceTv = reader.readString();
    }

    if ((serverInfo.extraDeltaFlag & 0x20) > 0) {
      serverInfo.keywords = reader.readString();
    }

    if ((serverInfo.extraDeltaFlag & 0x20) > 0) {
      serverInfo.gameId = reader.readLongLong();
    }
  }

  return serverInfo;
}
