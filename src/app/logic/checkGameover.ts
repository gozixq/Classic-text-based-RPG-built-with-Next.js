import { GameState } from './type';

export const checkGameOver = (state: GameState): GameState => {
  const next: GameState = {
    ...state,
    log: [...state.log],
    player: { ...state.player },
    enemy: { ...state.enemy },
  };

  if (next.enemy.hp <= 0) {
    next.log.push('🏆 You defeated the Chicken Boss!');
    next.gameOver = true;
    next.win = true;
    next.endingReason = 'captured';
    return next;
  }

  if (next.player.hp <= 0) {
    next.log.push('💀 You collapsed from your injuries...');
    next.gameOver = true;
    next.win = false;
    next.endingReason = 'death';
    return next;
  }

  const tipsyCount = next.player.status.filter(s => s === 'tipsy').length;
  if (tipsyCount >= 3) {
    next.log.push('🍻 You drank too much and passed out...');
    next.gameOver = true;
    next.win = false;
    next.endingReason = 'pass-out';
    return next;
  }

  return next;
};
