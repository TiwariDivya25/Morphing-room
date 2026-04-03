// The secret passage that opens behind the bookshelf
export default function HiddenPassage({ open }) {
  return (
    <div
      className="absolute z-[8] overflow-hidden transition-all duration-[1500ms]"
      style={{
        top: '20%', left: '5%',
        width: open ? 90 : 0,
        height: 160,
        background: 'linear-gradient(to right, #0a1a0a, #0f2a0f)',
        borderRadius: '4px 4px 0 0',
      }}
    >
      {/* Green glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,255,100,0.15) 0%, transparent 70%)',
          animation: 'passageGlow 2s infinite',
        }}
      />
      {/* Icons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="text-2xl">🌿</span>
        <span
          className="font-cinzel text-[#44ff88] text-[10px] tracking-widest opacity-80"
        >
          BEYOND
        </span>
      </div>

      {/* Inline keyframe for passage glow */}
      <style>{`
        @keyframes passageGlow {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
      `}</style>
    </div>
  )
}