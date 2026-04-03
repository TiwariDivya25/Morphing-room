import { useState } from 'react'
import { playCreak, playUnlock } from '../../App'
import { SECRET_CODE } from '../../App'
import Modal, { ModalTitle, ModalBtn, ModalBtnRow } from '../Modal'

export default function Chest({
  tableRead, chestUnlocked, setChestUnlocked,
  chestOpen, setChestOpen,
  hasItem, addInv,
  setHint, showWhisper, setModal, closeModal,
}) {
  const [code, setCode] = useState('')
  const [lockMsg, setLockMsg] = useState('')
  const [lockMsgType, setLockMsgType] = useState('') // 'error' | 'success'

  function tryCode() {
    const trimmed = code.trim()
    if (trimmed === SECRET_CODE || trimmed === '472') {
      playUnlock()
      setChestUnlocked(true)
      setLockMsg('✓ The lock clicks open...')
      setLockMsgType('success')
      setTimeout(() => {
        closeModal()
        setChestOpen(true)
        addInv('key', '🗝️ Old Key')
        showWhisper('The lock surrenders...')
        setHint('Key acquired! Now find the hidden passage.')
      }, 1200)
    } else {
      setLockMsg('✗ The dials click but the lock holds fast.')
      setLockMsgType('error')
    }
  }

  function handleClick() {
    playCreak()

    if (chestUnlocked && !hasItem('key')) {
      setChestOpen(true)
      addInv('key', '🗝️ Old Key')
      showWhisper('A key... but to what?')
      setHint('You have the key. Try the bookshelf...')
      return
    }

    if (chestUnlocked && hasItem('key')) {
      setModal(
        <>
          <ModalTitle>🗝️ The Chest</ModalTitle>
          <p className="mb-2">The chest lies open. You have already taken the key.</p>
          <ModalBtnRow><ModalBtn onClick={closeModal}>Close</ModalBtn></ModalBtnRow>
        </>
      )
      return
    }

    if (!tableRead) {
      setModal(
        <>
          <ModalTitle>🔒 Locked Chest</ModalTitle>
          <p className="mb-3">
            A heavy iron lock seals the chest shut. There is a 3-number combination dial.
          </p>
          <p className="italic text-[#8b5e1a]">
            Perhaps something in this room holds the answer...
          </p>
          <ModalBtnRow><ModalBtn onClick={closeModal}>Step Back</ModalBtn></ModalBtnRow>
        </>
      )
      setHint('Find a clue first...')
      return
    }

    // Show code entry form
    setCode('')
    setLockMsg('')
    setLockMsgType('')
    setModal(
      <ChestCodeModal
        code={code}
        setCode={setCode}
        lockMsg={lockMsg}
        lockMsgType={lockMsgType}
        tryCode={tryCode}
        onClose={closeModal}
      />
    )
  }

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer z-[10] transition-all duration-300
                 hover:brightness-[1.8] hover:scale-105"
      style={{ bottom: '28%', right: '10%', width: 100, height: 70 }}
      title="A locked chest"
    >
      <div
        className="w-full h-full relative rounded"
        style={{
          background: 'linear-gradient(to bottom, #4a2c0a, #2d1a06)',
          border: '2px solid #8b5e1a',
        }}
      >
        {/* Lid */}
        <div
          className="absolute left-0 right-0 rounded-t transition-transform duration-500"
          style={{
            top: 0,
            height: '45%',
            background: 'linear-gradient(to bottom, #5a3610, #3d2208)',
            borderBottom: '2px solid #c0851a',
            transformOrigin: 'top center',
            transform: chestOpen ? 'perspective(400px) rotateX(-70deg)' : 'none',
          }}
        />
        {/* Lock */}
        <div
          className="absolute flex items-center justify-center text-xs font-bold
                     text-[#3d1f08] rounded"
          style={{
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 20, height: 24,
            background: '#c0851a',
          }}
        >
          {chestUnlocked ? '🔓' : '🔒'}
        </div>
        {/* Bottom band */}
        <div
          className="absolute rounded-sm"
          style={{
            bottom: 6, left: '50%', transform: 'translateX(-50%)',
            width: '60%', height: 3,
            background: '#6b3a15',
          }}
        />
      </div>
    </div>
  )
}

// Separated so it re-renders with fresh state from parent
function ChestCodeModal({ tryCode, onClose }) {
  const [input, setInput] = useState('')
  const [msg, setMsg]     = useState('')
  const [msgType, setMsgType] = useState('')

  function attempt() {
    const v = input.trim()
    if (v === SECRET_CODE || v === '472') {
      playUnlock()
      setMsg('✓ The lock clicks open...')
      setMsgType('success')
      setTimeout(() => tryCode(), 1200)
    } else {
      setMsg('✗ The dials click but the lock holds fast.')
      setMsgType('error')
    }
  }

  return (
    <>
      <ModalTitle>🔒 Enter Combination</ModalTitle>
      <p className="mb-3">Three dials, each with a single number. Enter the code you found:</p>
      <input
        autoFocus
        className="code-input"
        type="text"
        placeholder="_ _ _"
        maxLength={5}
        value={input}
        onChange={(e) => setInput(e.target.value.replace(/[^0-9 ]/g, ''))}
        onKeyDown={(e) => e.key === 'Enter' && attempt()}
      />
      {msg && (
        <p
          className={`text-sm text-center mt-1 ${
            msgType === 'success' ? 'text-[#44ff88]' : 'text-[#ff4444]'
          }`}
        >
          {msg}
        </p>
      )}
      <ModalBtnRow>
        <ModalBtn onClick={attempt}>🔓 Unlock</ModalBtn>
        <ModalBtn onClick={onClose}>Cancel</ModalBtn>
      </ModalBtnRow>
    </>
  )
}