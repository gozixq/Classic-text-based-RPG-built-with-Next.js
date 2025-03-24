import React from 'react';

type WinningSceneProps = {
  onRestart: () => void;
};

const WinningScene: React.FC<WinningSceneProps> = ({ onRestart }) => {
  return (
    <div className="bg-black text-lime-400 h-screen w-screen flex flex-col items-center justify-center font-mono text-center px-4">
      <h1 className="text-4xl mb-6 animate-pulse">🎉 Victory!</h1>

      <pre className="text-sm mb-8 whitespace-pre-wrap leading-tight">
{`
You have captured the Chicken Boss. 🐔👑

Taxes? Gone.
Peace? Restored.
Beer? Still flowing.

The realm shall sing tales of your net-throwing greatness.
`}
      </pre>

      <button
        onClick={onRestart}
        className="mt-4 border border-lime-400 text-lime-400 px-6 py-2 text-base hover:bg-lime-400 hover:text-black transition-all duration-200"
      >
        Play Again
      </button>
    </div>
  );
};

export default WinningScene;
