import { A2S_RULES } from "../models/buffer.ts";
import { IRules } from "../models/rule.ts";
import { getChallenge } from "../utils/getChallenge.ts";
import { Reader } from "../utils/reader.ts";
import { sendData } from "../utils/sendData.ts";
import { concat } from "../../deps.ts";

export async function getRules(ip: string, port: number): Promise<IRules> {
  const challenge = await getChallenge(A2S_RULES, ip, port);
  console.log(concat(A2S_RULES, challenge.challange));
  const reader = new Reader(
    await sendData(concat(A2S_RULES, challenge.challange), ip, port),
  );
  const rules: IRules = {
    header: String.fromCharCode(reader.readByte()),
    ruleCount: reader.readShort(),
    rules: [],
  };

  for (var i = 0; i < rules.ruleCount; i++) {
    rules.rules.push({
      name: reader.readString(),
      value: reader.readString(),
    });
  }

  return rules;
}
