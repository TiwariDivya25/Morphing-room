// The flickering lantern hanging from the ceiling — purely atmospheric
export default function Lantern() {
  return (
    <>
      {/* Glow halo */}
      <div
        className="absolute top-[8%] left-1/2 pointer-events-none animate-flicker z-[3]"
        style={{
          transform: 'translateX(-50%)',
          width: 300, height: 300,
          background:
            'radial-gradient(ellipse, rgba(255,160,40,0.18) 0%, rgba(255,120,20,0.08) 50%, transparent 80%)',
        }}
      />
      {/* Lantern emoji */}
      <div
        className="absolute top-[5%] left-1/2 text-5xl z-[5] animate-swing select-none"
        style={{ filter: 'drop-shadow(0 0 12px #ff8c00) drop-shadow(0 0 4px #ffd700)' }}
        title="A flickering lantern"
      >
        🏮
      </div>
    </>
  )
}