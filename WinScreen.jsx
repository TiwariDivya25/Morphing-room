export default function WinScreen({ onReset }) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 animate-fadeInSlow"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #021a08 0%, #010a04 100%)',
      }}
    >
      {/* Spinning portal */}
      <div className="text-6xl animate-portalSpin mb-2">🌀</div>

      <h1
        className="font-cinzel font-bold tracking-widest text-[#44ff88] animate-winGlow mb-4 mt-4"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
      >
        LEVEL COMPLETE
      </h1>

      <p className="font-crimson text-[#8bc4a0] text-lg text-center max-w-sm leading-8">
        You found the hidden passage.<br />
        The room releases you into the unknown...<br />
        <em className="text-[#44aa66]">What lies beyond?</em>
      </p>

      <button
        onClick={onReset}
        className="mt-10 font-cinzel text-[#44ff88] border border-[#44ff88] px-8 py-3 rounded
                   tracking-widest text-sm transition-all duration-300 cursor-pointer
                   hover:bg-[#021a08] hover:shadow-[0_0_12px_rgba(68,255,136,0.4)]"
      >
        ↩ Play Again
      </button>
    </div>
  )
}