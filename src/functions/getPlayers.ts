import { A2S_PLAYER } from "../models/buffer.ts";
import { Players } from "../models/player.ts";
import { getChallenge } from "../utils/getChallenge.ts";
import { Reader } from "../utils/reader.ts";
import { sendData } from "../utils/sendData.ts";

export async function getPlayers(ip: string, port: number) {
  const challenge = await getChallenge(A2S_PLAYER, ip, port);
  var reqBuffer = new Uint8Array(
    A2S_PLAYER.length + challenge.challange.length,
  );
  reqBuffer.set(A2S_PLAYER);
  reqBuffer.set(challenge.challange, A2S_PLAYER.length);

  const reader = new Reader(await sendData(reqBuffer, ip, port));
  const players: Players = {
    header: String.fromCharCode(reader.readByte()),
    playerCount: reader.readByte(),
    players: [],
  };

  for (var i = 0; i < players.playerCount; i++) {
    players.players.push({
      index: reader.readByte(),
      name: reader.readString(),
      score: reader.readLong(),
      duration: reader.readFloat(),
    });
  }

  return players;
}
