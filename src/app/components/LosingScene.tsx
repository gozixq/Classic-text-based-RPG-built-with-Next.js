import React from 'react';

type LosingSceneProps = {
  onRestart: () => void;
};

const LosingScene: React.FC<LosingSceneProps> = ({ onRestart }) => {
  return (
    <div className="bg-black text-red-500 h-screen w-screen flex flex-col items-center justify-center font-mono text-center px-4">
      <h1 className="text-4xl mb-6 animate-pulse">💀 GAME OVER</h1>

      <pre className="text-sm mb-8 whitespace-pre-wrap leading-tight">
{`
The Chicken Boss has defeated you...

Your story ends here — for now.

Try again?
`}
      </pre>

      <button
        onClick={onRestart}
        className="border border-red-500 text-red-500 px-6 py-2 text-base hover:bg-red-500 hover:text-black transition-all duration-200"
      >
        Retry
      </button>
    </div>
  );
};

export default LosingScene;
