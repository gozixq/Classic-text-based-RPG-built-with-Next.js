import { GameState } from './type';
import { checkGameOver } from './checkGameover';

export const runChickenAI = (state: GameState): GameState => {
  if (state.turn === 'player') return state;

  const nextState: GameState = {
    ...state,
    log: [...state.log],
    player: { ...state.player, status: [...state.player.status] },
    enemy: { ...state.enemy, status: [...state.enemy.status] },
  };

  let damageModifier = 1;

  if (state.player.status.includes('playing-dead')) {
    const success = Math.random() < 0.7;
    if (success) {
      nextState.log.push('🐔 The chicken ignores the corpse...');
      nextState.player.status = state.player.status.filter((s) => s !== 'playing-dead');
      nextState.turn = 'player';
      return checkGameOver(nextState);
    } else {
      nextState.log.push('🐔 The chicken sees through your act!');
      nextState.player.status = state.player.status.filter((s) => s !== 'playing-dead');
    }
  }

  if (state.player.status.includes('throw-rice')) {
    nextState.turn = 'player';
    return checkGameOver(nextState);
  }

  if (state.enemy.status.includes('stunned')) {
    nextState.log.push('😵 The chicken is stunned and can’t move!');
    nextState.enemy.status = state.enemy.status.filter((s) => s !== 'stunned');
    nextState.turn = 'player';
    return checkGameOver(nextState);
  }

  if (state.enemy.status.includes('weakened')) {
    damageModifier = 0.5;
    nextState.enemy.status = state.enemy.status.filter((s) => s == 'weakened');
    nextState.log.push('🪶 The chicken struggles to move — it’s weakened!');
  }

  const moves = [
    { text: '🥚 Chicken lays an explosive egg!', damage: 25 },
    { text: '💥 Chicken pecks violently!', damage: 15 },
    { text: '🌀 Chicken caws in confusion...', damage: 0 },
  ];

  const move = moves[Math.floor(Math.random() * moves.length)];
  nextState.log.push(move.text);

  const finalDamage = Math.floor(move.damage * damageModifier);

  if (finalDamage > 0) {
    nextState.player.hp = Math.max(nextState.player.hp - finalDamage, 0);
    nextState.log.push(`💢 You took ${finalDamage} damage!`);
  }

  nextState.turn = 'player';
  return checkGameOver(nextState);
};
