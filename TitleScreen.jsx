export default function TitleScreen({ onStart }) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 animate-fadeIn"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #1a0a03 0%, #0a0704 60%, #050201 100%)',
      }}
    >
      {/* Lantern icon */}
      <div
        className="text-5xl mb-4 animate-swing"
        style={{ filter: 'drop-shadow(0 0 15px #ff8c00)' }}
      >
        🏮
      </div>

      {/* Title */}
      <h1
        className="font-cinzel font-bold tracking-widest text-[#ffd700] animate-titleGlow mb-2"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
      >
        THE FORGOTTEN ROOM
      </h1>

      {/* Subtitle */}
      <p className="font-crimson italic text-[#8b5e1a] text-lg mb-10 tracking-wide">
        Something stirs within the abandoned house...
      </p>

      {/* Instructions */}
      <div className="text-center font-crimson text-[#5a3a1a] text-sm leading-8 max-w-xs mb-8">
        Explore the room. Click on objects to interact.<br />
        Solve the puzzle. Find the hidden passage.<br />
        <em className="text-[#8b5e1a]">Trust nothing you see.</em>
      </div>

      {/* Start button */}
      <button
        onClick={onStart}
        className="font-cinzel text-[#ffd700] border border-[#8b5e1a] px-10 py-3 rounded
                   tracking-widest text-sm transition-all duration-300 cursor-pointer
                   hover:bg-[#3d1f0a] hover:border-[#ffd700] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]"
      >
        ▶ Enter the Room
      </button>
    </div>
  )
}