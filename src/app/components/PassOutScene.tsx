import React from 'react';

type PassOutSceneProps = {
  onRestart: () => void;
};

const PassOutScene: React.FC<PassOutSceneProps> = ({ onRestart }) => {
  return (
    <div className="bg-black text-yellow-400 h-screen w-screen flex flex-col items-center justify-center font-mono text-center px-4">
      <h1 className="text-4xl mb-6 animate-pulse">🍺 TOO MANY BEERS</h1>

      <pre className="text-sm mb-8 whitespace-pre-wrap leading-tight">
{`
You drank too much and passed out cold...

The chicken boss struts away — unimpressed.

Maybe go easier on the booze next time?
`}
      </pre>

      <button
        onClick={onRestart}
        className="border border-yellow-400 text-yellow-400 px-6 py-2 text-base hover:bg-yellow-400 hover:text-black transition-all duration-200"
      >
        🔁 Retry
      </button>
    </div>
  );
};

export default PassOutScene;
