import { GameState, Command } from './type';
import { runChickenAI } from './chickenAi';

export const handleCommand = (input: string, state: GameState): GameState => {
  const command = input.trim().toLowerCase() as Command;
  const newLog = [...state.log, `> ${input}`];
  const nextState = { ...state, log: newLog };
  if (state.turn !== 'player') {
    return {
      ...state,
      log: [...newLog, '⏳ It’s not your turn!'],
    };
  }
  switch (command) {
    case 'attack':
      nextState.enemy.hp -= 15;
      nextState.log.push('💥 You attacked the chicken! 🐔-15Hp');
      break;
    case 'talk':
      nextState.log.push('🗨️ "Why are you doing this?" The chicken stares blankly...');
      break;
    case 'skill':
      nextState.enemy.hp -= 10;
      nextState.log.push('🔥 You unleash your ultimate chicken-frying technique! 🐔-10Hp');
      break;
    case 'play dead':
      nextState.log.push('💀 You flop dramatically to the floor!');
      nextState.log.push('🐔 The chicken tilts its head... confused.');
      nextState.player.status.push('playing-dead');
      break;
    case 'catch chicken': {
        if (!nextState.enemy.status.includes('weakened')) {
          nextState.log.push('🐔 The chicken is too agile to be caught right now!');
        } else {
          nextState.log.push('🕸️ You throw a final net and catch the weakened chicken!');
          nextState.log.push('🎉 Victory! You captured the Chicken Boss!');
          nextState.gameOver = true;
          nextState.win = true;
          return nextState;
        }
        break;
      }
    case 'drink beer':
      const heal = 15;
      nextState.player.hp = Math.min(nextState.player.hp + heal, nextState.player.maxHp);
      nextState.log.push(`🍺 You drink a warm, flat beer. HP +${heal}!`);
      if (Math.random() < 0.5) {
        nextState.player.status.push('tipsy');
        nextState.log.push('🍻 You feel a little dizzy...');
     }
    break;
    case 'throw net': {
        const isTipsy = nextState.player.status.includes('tipsy');
        const netUsedCount = nextState.player.status.filter(s => s === 'net-used').length;
        const baseSuccessRate = 0.6;
        const penaltyIfTipsy = isTipsy ? 0.3 : 0;
        const success = Math.random() < (baseSuccessRate - penaltyIfTipsy);
      
        nextState.player.status.push('net-used');
      
        if (netUsedCount >= 2) {
          nextState.log.push('💢 The chicken sees through your tricks!');
          nextState.log.push('💥 It rips the net apart and stomps on you!');
          const damage = Math.floor(nextState.player.maxHp / 2);
          nextState.player.hp -= damage;
          nextState.log.push(`💀 You took ${damage} damage!`);
          break;
        }
        if (success) {
          nextState.log.push('🕸️ You throw a net over the chicken!');
          nextState.enemy.status.push('weakened');
          nextState.log.push('🪶 The chicken is entangled! Its next attack will be weaker.');
        } else {
          nextState.log.push('😵 You miss! The chicken counters with a stomp!');
          const damage = Math.floor(nextState.player.maxHp / 2);
          nextState.player.hp -= damage;
          nextState.log.push(`💢 You took ${damage} damage!`);
        }
        break;
      }
      case 'throw rice': {
        nextState.log.push('🍚 You throw rice at the chicken.');
        nextState.log.push('🐔 The chicken stares at you blankly.');
        nextState.log.push('🫥 It doesn’t care for cheap carbs.');
        nextState.player.status.push('throw-rice');
        break;
      }
      

    default:
      nextState.log.push('❓ Invalid command.');
      return nextState;
  }

  nextState.turn = 'enemy';

  return runChickenAI(nextState);
};
