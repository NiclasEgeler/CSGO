import { CHALLENGE } from "../models/buffer.ts";
import { Challenge } from "../models/challenge.ts";
import { Reader } from "./reader.ts";
import { sendData } from "./sendData.ts";

export async function getChallenge(
  reqBuffer: Uint8Array,
  ip: string,
  port: number,
): Promise<Challenge> {
  var challengeBuff = new Uint8Array(reqBuffer.length + CHALLENGE.length);
  challengeBuff.set(reqBuffer);
  challengeBuff.set(CHALLENGE, reqBuffer.length);
  const reader = new Reader(await sendData(challengeBuff, ip, port));
  const challenge: Challenge = {
    header: String.fromCharCode(reader.readByte()),
    challange: reader.readUint8(4),
  };
  return challenge;
}
