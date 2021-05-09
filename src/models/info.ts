export interface IServerInfo {
  /** Always equal to 'I' (0x49).*/
  header: string;

  /** Protocol version used by the server.*/
  protocol: number;

  /** Name of the server.*/
  name: string;

  /** Map the server has currently loaded.*/
  map: string;

  /** Name of the folder containing the game files.*/
  folder: string;

  /** Full name of the game.*/
  game: string;

  /** Steam Application ID of game.*/
  id: number;

  /** Number of players on the server.*/
  players: number;

  /** Maximum number of players the server reports it can hold.*/
  maxPlayers: number;

  /** Number of bots on the server.*/
  bots: number;

  /** Indicates the type of server. ('d' for dedicated, 'l' for non-dedicated, 'p' for SourceTV relay proxy) */
  serverType: string;

  /** Indicates the operating system of the server. ('l' for Linux, 'w' for Windows, 'm' or 'o' for Mac)*/
  environment: string;

  /** Indicates whether the server requires a password.*/
  visibility: boolean;

  /** Specifies whether the server uses VAC.*/
  vac: boolean;

  /** Version of the game installed on the server.*/
  version: string;

  /** If present, this specifies which additional data fields will be included.*/
  extraDeltaFlag?: number;

  /** The server's game port number.*/
  port?: number;

  /** Server's SteamID.*/
  steamId?: bigint;

  /** Spectator port number for SourceTV.*/
  portSourceTv?: number;

  /** Name of the spectator server for SourceTV.*/
  nameSourceTv?: string;

  /** Tags that describe the game according to the server.*/
  keywords?: string;

  /** The server's 64-bit GameID.*/
  gameId?: bigint;
}
