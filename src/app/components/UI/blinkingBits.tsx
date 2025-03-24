import React, { useEffect, useState } from 'react';

const BlinkingBits: React.FC = () => {
  const [bitMatrix, setBitMatrix] = useState<string[][]>([]);

  useEffect(() => {
    const newMatrix: string[][] = Array.from({ length: 100 }, () =>
      Array.from({ length: 120 }, () => (Math.random() > 0.5 ? '1' : '0'))
    );
    setBitMatrix(newMatrix);
  }, []);

  return (
    <div className="absolute inset-0 text-[15px] leading-[1rem] overflow-hidden pointer-events-none select-none font-mono">
      <div className="w-full h-full p-2 bg-black grid grid-cols-6 gap-1">
        {bitMatrix.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-wrap">
            {row.map((bit, colIdx) => (
              <span
                key={`${rowIdx}-${colIdx}`}
                className={bit === '1' ? 'text-green-400' : 'text-green-700 animate-pulse'}
              >
                {bit}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlinkingBits;
