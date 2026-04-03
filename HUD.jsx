export default function HUD({ inventory, hint }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex justify-between items-end
                 px-6 pb-3 pt-6 z-20 pointer-events-none"
      style={{
        background: 'linear-gradient(to top, rgba(5,2,1,0.95), transparent)',
      }}
    >
      {/* Inventory */}
      <div className="flex items-center gap-2">
        <span className="font-cinzel text-[#8b5e1a] text-xs tracking-widest">
          INVENTORY
        </span>
        <div className="flex gap-2 ml-2">
          {inventory.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a0c04] border border-[#8b5e1a] rounded px-3 py-1
                         text-[#ffd700] text-sm animate-invAppear"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Hint text */}
      <div className="font-cinzel text-[#5a3a1a] text-xs italic text-right leading-6">
        {hint}
      </div>
    </div>
  )
}