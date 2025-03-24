'use client';
import React, { useEffect, useState } from 'react';
import { initialState } from '../logic/battleState';
import { handleCommand } from '../logic/gameLogic';
import { GameState } from '../logic/type';

type GameProps = {
    onGameOver: (reason: 'win' | 'lose' | 'pass-out') => void;
  };
  

const Game: React.FC<GameProps> = ({ onGameOver }) => {
  const [state, setState] = useState<GameState>(initialState);
  const [command, setCommand] = useState('');

  const submitCommand = () => {
    if (!command.trim() || state.gameOver) return;
    const nextState = handleCommand(command, state);
    setState(nextState);
    setCommand('');
  };
  useEffect(() => {
    if (state.gameOver) {
      if (state.win) onGameOver('win');
      else if (state.endingReason === 'pass-out') onGameOver('pass-out');
      else onGameOver('lose');
    }
  }, [state.gameOver, state.win, state.endingReason, onGameOver]);

  return (
    <div className="h-screen w-screen bg-black text-[#32CD32] font-mono flex flex-col p-4">
      <div className="mb-2 text-sm">
        🧍 {state.player.hp} HP vs 🐔 {state.enemy.hp} HP
      </div>

      <div className="flex-1 overflow-y-auto border border-[#32CD32] p-4 mb-4 rounded text-sm">
        {state.log.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        {state.gameOver && (
          <div className="mt-4 font-bold">
            {state.win ? '🎉 YOU WIN!' : '💀 GAME OVER'}
          </div>
        )}
      </div>

      <div className="flex">
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submitCommand()}
          disabled={state.gameOver}
          className="flex-1 px-4 py-2 bg-black border border-[#32CD32] text-[#32CD32] outline-none disabled:opacity-40"
          placeholder="Type a command (attack, talk, skill, play dead, drink beer...)"
        />
        <button
          onClick={submitCommand}
          disabled={state.gameOver}
          className="ml-2 border border-[#32CD32] px-4 py-2 hover:bg-[#32CD32] hover:text-black disabled:opacity-40"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Game;
