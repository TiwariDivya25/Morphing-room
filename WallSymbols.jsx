// Ancient symbols that appear on the wall after the bookshelf is investigated
export default function WallSymbols({ visible }) {
  return (
    <div
      className="absolute z-[5] flex justify-around pointer-events-none
                 transition-opacity duration-1000"
      style={{
        top: '30%', left: '25%', right: '25%',
        fontSize: '1.5rem',
        opacity: visible ? 1 : 0,
        filter: 'drop-shadow(0 0 6px #ff4400)',
        color: '#cc3300',
      }}
    >
      <span>⌬</span>
      <span>☽</span>
      <span>✦</span>
      <span>⌀</span>
    </div>
  )
}