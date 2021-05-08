export interface Players {
  /** Always equal to 'D' (0x44).*/
  header: string;

  /** Number of players whose information was gathered.*/
  playerCount: number;

  /** List of players.*/
  players: Player[];
}

interface Player {
  /** Index of player chunk starting from 0.*/
  index: number;

  /** Name of the player.*/
  name: string;

  /** Player's score (usually "frags" or "kills").*/
  score: number;
    
  /** Time (in seconds) player has been connected to the server.*/
  duration: number;
}
