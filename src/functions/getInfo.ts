import { sendData } from "../utils/sendData.ts";
import { A2S_INFO } from "../models/buffer.ts";

export async function getInfo(ip: string, port: number) : Promise<number> {
  return await sendData(A2S_INFO, ip, port);
}
