import { CHALLENGE } from "../models/buffer.ts";
import { Challenge } from "../models/challenge.ts";
import { Reader } from "./reader.ts";
import { sendData } from "./sendData.ts";
import { concat } from "../../deps.ts";

export async function getChallenge(
  reqBuffer: Uint8Array,
  ip: string,
  port: number,
): Promise<Challenge> {
  const reader = new Reader(
    await sendData(concat(reqBuffer, CHALLENGE), ip, port),
  );
  const challenge: Challenge = {
    header: String.fromCharCode(reader.readByte()),
    challange: reader.readUint8(4),
  };
  return challenge;
}
