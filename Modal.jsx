// Reusable modal overlay for all in-game interactions
export default function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[100] animate-fadeIn"
      style={{ background: 'rgba(5,2,1,0.92)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="font-crimson text-[#d4a96a] text-lg leading-7 rounded-lg p-8
                   max-w-md w-[90%]"
        style={{
          background: 'linear-gradient(to bottom, #1a0c04, #0f0805)',
          border: '1px solid #6b3a15',
          boxShadow: '0 0 40px rgba(255,100,0,0.2)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Reusable styled sub-components used inside modals
export function ModalTitle({ children }) {
  return (
    <h2 className="font-cinzel text-[#ffd700] text-xl text-center tracking-widest mb-4">
      {children}
    </h2>
  )
}

export function ModalCode({ code }) {
  return (
    <div
      className="font-mono text-3xl text-[#ff8c00] text-center tracking-[0.3em]
                 py-2 px-4 rounded my-4"
      style={{ background: '#0a0704', border: '1px solid #6b3a15' }}
    >
      {code}
    </div>
  )
}

export function ModalBtn({ children, onClick, green }) {
  return (
    <button
      onClick={onClick}
      className={`font-cinzel text-sm tracking-widest px-6 py-2 rounded border
                  transition-all duration-300 cursor-pointer
                  hover:bg-[#3d1f0a]
                  ${green
                    ? 'text-[#44ff88] border-[#44ff88] hover:shadow-[0_0_10px_rgba(68,255,136,0.3)]'
                    : 'text-[#ffd700] border-[#8b5e1a] hover:border-[#ffd700] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
                  }`}
    >
      {children}
    </button>
  )
}

export function ModalBtnRow({ children }) {
  return (
    <div className="flex gap-4 justify-center flex-wrap mt-4">
      {children}
    </div>
  )
}