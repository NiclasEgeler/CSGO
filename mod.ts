export { getInfo } from "./src/functions/getInfo.ts";
export { getPlayers } from "./src/functions/getPlayers.ts";
export { getRules } from "./src/functions/getRules.ts";

import { IPlayers } from "./src/models/player.ts";
export type Players = IPlayers;
import { IRules } from "./src/models/rule.ts";
export type Rules = IRules;
import { IServerInfo } from "./src/models/info.ts";
export type ServerInfo = IServerInfo;
