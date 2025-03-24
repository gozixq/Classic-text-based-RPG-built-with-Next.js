import BlinkingBits from "./UI/blinkingBits";

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {

  return (
    <div className="relative h-screen w-screen bg-black text-[#32CD32] font-mono overflow-hidden flex items-center justify-center">
      <BlinkingBits />
      <div className="z-10 border-2 border-[#32CD32] p-8 rounded-md text-center w-2/4 backdrop-blur-sm bg-black/70">
        <pre className="text-[5px] lg:text-[14px] whitespace-pre-wrap leading-tight mb-6">
{`
██╗███████╗███████╗██╗  ██╗ █████╗ ██╗
██║██╔════╝██╔════╝██║  ██║██╔══██╗██║
██║███████╗███████╗█████ ═╝███████║██║
██║╚════██║██═════╝██╔══██║██╔══██║██║
██║███████║███████║██║  ██║██║  ██║██║
    ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    
...but Why Do I Still Tax?

The Chicken Boss: Text-Based RPG

       __(.)<
      \___)   
  ~~~~~~||~~~~~~~
`}
        </pre>

        <button
          onClick={onStart}
          className="mt-4 border border-[#32CD32] text-[#32CD32] px-6 py-2 text-base hover:bg-[#32CD32] hover:text-black transition-all duration-200"
        >
          ▶ Start Game
        </button>
      </div>
      
    </div>
    
  );
};

export default StartScreen;
