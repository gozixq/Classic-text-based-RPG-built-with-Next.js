export type Player = {
    name: string;
    hp: number;
    maxHp: number;
    status: string[];
  };
  
  export type Enemy = {
    name: string;
    hp: number;
    maxHp: number;
    status: string[];
  };
  
  export type GameState = {
    player: Player;
    enemy: Enemy;
    log: string[];
    turn: 'player' | 'enemy';
    gameOver?: boolean;
    win?: boolean;
    endingReason?: 'death' | 'pass-out' | 'captured';
  };
  
  export type Command = 'attack' | 'defend' | 'talk' | 'skill'| 'play dead' | 'drink beer' | 'throw net'| 'throw rice' | 'catch chicken' | 'pay taxes';
  