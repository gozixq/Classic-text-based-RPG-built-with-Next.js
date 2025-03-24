'use client';
import React, { useState } from 'react';
import StartScreen from './components/StartScene';
import Game from './components/Game';
import WinningScene from './components/WinningScence';
import LosingScene from './components/LosingScene';
import PassOutScene from './components/PassOutScene';
import ReactHowler from 'react-howler';

type Scene = 'start' | 'game' | 'win' | 'lose' | 'pass-out';

export default function Page() {
  const [scene, setScene] = useState<Scene>('start');
  const isGameActive = scene === 'start' || scene === 'game' || scene === 'win' || scene === 'lose' || scene === 'pass-out';
  const isWinActive = scene === 'win';
  const isLoseActive = scene === 'lose';
  const handleRestart = () => setScene('start');


  return (
    <>
      <ReactHowler
        src="/sound/funny-bgm-240795.mp3"
        playing={isGameActive}
        loop={true}
        volume={0.2}
      />
      <ReactHowler
        src="/sound/winning.mp3"
        playing={isWinActive}
        loop={false}
        volume={0.5}
      />
      <ReactHowler
        src="/sound/losing.mp3"
        playing={isLoseActive}
        loop={false}
        volume={0.5}
      />

      {scene === 'start' && <StartScreen onStart={() => setScene('game')} />}
      {scene === 'game' && <Game onGameOver={(reason) => setScene(reason)} />}
      {scene === 'win' && <WinningScene onRestart={handleRestart} />}
      {scene === 'lose' && <LosingScene onRestart={handleRestart} />}
      {scene === 'pass-out' && <PassOutScene onRestart={handleRestart} />}
    </>
  );
}
