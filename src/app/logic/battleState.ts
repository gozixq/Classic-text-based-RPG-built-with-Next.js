import { GameState } from './type';

export const initialState: GameState = {
  player: {
    name: 'You',
    hp: 100,
    maxHp: 100,
    status: [],
  },
  enemy: {
    name: 'Chicken Boss',
    hp: 150,
    maxHp: 150,
    status: [],
  },
  log: ['🐔 The Chicken Boss rises from the ashes...'],
  turn: 'player',
};
