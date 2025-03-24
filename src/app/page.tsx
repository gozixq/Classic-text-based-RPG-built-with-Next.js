'use client';
import React, { useState } from 'react';
import StartScreen from './components/StartScene';
import Game from './components/Game';
import WinningScene from './components/WinningScence';
import LosingScene from './components/LosingScene';
import PassOutScene from './components/PassOutScene';

type Scene = 'start' | 'game' | 'win' | 'lose' | 'pass-out';

export default function Page() {
  const [scene, setScene] = useState<Scene>('start');

  const handleRestart = () => setScene('start');

  return (
    <>
      {scene === 'start' && <StartScreen onStart={() => setScene('game')} />}
      {scene === 'game' && <Game onGameOver={(reason) => setScene(reason)} />}
      {scene === 'win' && <WinningScene onRestart={handleRestart} />}
      {scene === 'lose' && <LosingScene onRestart={handleRestart} />}
      {scene === 'pass-out' && <PassOutScene onRestart={handleRestart} />}
    </>
  );
}
