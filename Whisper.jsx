// Floating atmospheric whisper text
export default function Whisper({ text }) {
  return (
    <div
      className="absolute top-[15%] left-1/2 -translate-x-1/2 pointer-events-none z-[6]
                 font-crimson italic text-sm tracking-widest whitespace-nowrap
                 transition-opacity duration-1000"
      style={{
        color: 'rgba(180,100,50,0.6)',
        opacity: text ? 1 : 0,
      }}
    >
      {text}
    </div>
  )
}