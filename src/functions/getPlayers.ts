import { A2S_PLAYER } from "../models/buffer.ts";
import { Players } from "../models/player.ts";
import { getChallenge } from "../utils/getChallenge.ts";
import { Reader } from "../utils/reader.ts";
import { sendData } from "../utils/sendData.ts";
import { concat } from "../../deps.ts";

export async function getPlayers(ip: string, port: number): Promise<Players> {
  const challenge = await getChallenge(A2S_PLAYER, ip, port);
  const reader = new Reader(
    await sendData(concat(A2S_PLAYER, challenge.challange), ip, port),
  );
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
