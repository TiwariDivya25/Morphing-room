import { useState, useCallback, useRef, useEffect } from 'react'
import HUD            from './HUD'
import Modal          from './Modal'
import Whisper        from './ui/Whisper'
import WallSymbols    from './ui/WallSymbols'
import Lantern        from './objects/Lantern'
import Table          from './objects/Table'
import Chest          from './objects/Chest'
import Bookshelf      from './objects/Bookshelf'
import RockingChair   from './objects/RockingChair'
import Door           from './objects/Door'
import Doll           from './objects/Doll'
import HiddenPassage  from './objects/HiddenPassage'

// Room is the main game canvas — it owns ALL game state
export default function Room({ onWin }) {
  // ── State ─────────────────────────────────────────────────────────────────
  const [tableRead,      setTableRead]      = useState(false)
  const [shelfClicked,   setShelfClicked]   = useState(false)
  const [chestUnlocked,  setChestUnlocked]  = useState(false)
  const [chestOpen,      setChestOpen]      = useState(false)
  const [doorAjar,       setDoorAjar]       = useState(false)
  const [dollMoved,      setDollMoved]      = useState(false)
  const [passageOpen,    setPassageOpen]    = useState(false)
  const [symbolsVisible, setSymbolsVisible] = useState(false)
  const [inventory,      setInventory]      = useState([])
  const [hint,           setHint]           = useState('Explore the room...')
  const [whisper,        setWhisper]        = useState('')
  const [modal,          setModal]          = useState(null) // null | JSX
  const doorTimerRef = useRef(null)

  // Helper: show a floating whisper text for 3 s
  const showWhisper = useCallback((text) => {
    setWhisper(text)
    setTimeout(() => setWhisper(''), 3000)
  }, [])

  // Helper: add item to inventory (no duplicates)
  const addInv = useCallback((id, label) => {
    setInventory((prev) =>
      prev.find((i) => i.id === id) ? prev : [...prev, { id, label }]
    )
  }, [])

  const hasItem = useCallback(
    (id) => inventory.some((i) => i.id === id),
    [inventory]
  )

  const closeModal = useCallback(() => setModal(null), [])

  // Periodic atmospheric whispers
  useEffect(() => {
    const t1 = setTimeout(() => showWhisper('...find the way...'), 5000)
    const t2 = setTimeout(() => showWhisper('...the chest holds secrets...'), 15000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [showWhisper])

  // ── Pass all handlers down as props ───────────────────────────────────────
  const handlers = {
    tableRead, setTableRead, shelfClicked, setShelfClicked,
    chestUnlocked, setChestUnlocked, chestOpen, setChestOpen,
    doorAjar, setDoorAjar, dollMoved, setDollMoved,
    passageOpen, setPassageOpen, symbolsVisible, setSymbolsVisible,
    inventory, addInv, hasItem,
    setHint, showWhisper, setModal, closeModal,
    onWin, doorTimerRef,
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 60% 40% at 50% 30%, #3d1f0a 0%, #1a0c04 60%, #0a0704 100%)',
      }}
    >
      {/* ── Room architecture ── */}
      <RoomShell />

      {/* ── Light & atmosphere ── */}
      <div
        className="absolute pointer-events-none z-[2]"
        style={{
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 30% at 50% 90%, rgba(30,15,5,0.7) 0%, transparent 100%),
            radial-gradient(ellipse 40% 20% at 20% 80%, rgba(20,10,3,0.5) 0%, transparent 100%),
            radial-gradient(ellipse 40% 20% at 80% 80%, rgba(20,10,3,0.5) 0%, transparent 100%)
          `,
          animation: 'fogDrift 8s ease-in-out infinite',
        }}
      />
      {/* Light flicker overlay */}
      <div
        className="absolute inset-0 z-[15] pointer-events-none animate-lightFlicker"
      />

      {/* ── Atmospheric elements ── */}
      <Lantern />
      <Whisper text={whisper} />
      <WallSymbols visible={symbolsVisible} />

      {/* ── SVG wall cracks ── */}
      <svg
        className="absolute inset-0 pointer-events-none opacity-40"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        <line x1="200" y1="50"  x2="220" y2="150" stroke="#3d1f0a" strokeWidth="1.5"/>
        <line x1="220" y1="150" x2="200" y2="250" stroke="#3d1f0a" strokeWidth="1"/>
        <line x1="600" y1="80"  x2="620" y2="180" stroke="#3d1f0a" strokeWidth="1.5"/>
        <line x1="150" y1="200" x2="180" y2="240" stroke="#3d1f0a" strokeWidth="1"/>
      </svg>

      {/* ── Interactive game objects ── */}
      <HiddenPassage open={passageOpen} />
      <Bookshelf     {...handlers} />
      <RockingChair  showWhisper={showWhisper} />
      <Table         {...handlers} />
      <Doll          {...handlers} />
      <Chest         {...handlers} />
      <Door          {...handlers} />

      {/* ── HUD ── */}
      <HUD inventory={inventory} hint={hint} />

      {/* ── Modal ── */}
      {modal && <Modal onClose={closeModal}>{modal}</Modal>}
    </div>
  )
}

// Static room shell (walls, floor, ceiling)
function RoomShell() {
  return (
    <>
      {/* Ceiling */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '25%',
          background: 'linear-gradient(to bottom, #0a0704 0%, #1a0e07 100%)',
        }}
      />
      {/* Left wall */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: '18%', height: '100%',
          background: 'linear-gradient(to right, #0f0805, #1a0e07)',
        }}
      />
      {/* Right wall */}
      <div
        className="absolute top-0 right-0"
        style={{
          width: '18%', height: '100%',
          background: 'linear-gradient(to left, #0f0805, #1a0e07)',
        }}
      />
      {/* Floor */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '40%',
          background: 'linear-gradient(to top, #1c0f06 0%, #2a1508 40%, transparent 100%)',
        }}
      />
      {/* Floor boards */}
      <div
        className="absolute bottom-0 left-0 right-0 opacity-60"
        style={{
          height: '40%',
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0px, transparent 80px, rgba(0,0,0,0.3) 80px, rgba(0,0,0,0.3) 82px)',
        }}
      />
    </>
  )
}