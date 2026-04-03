import { playCreak } from '../../App'
import { ModalTitle, ModalBtn, ModalBtnRow } from '../Modal'
import { useState } from 'react'

export default function Door({ setModal, closeModal, showWhisper }) {
  const [ajar, setAjar] = useState(false)

  function handleClick() {
    playCreak()
    setAjar(true)
    showWhisper('...not this way...')
    setTimeout(() => setAjar(false), 3000)
    setModal(
      <>
        <ModalTitle>🚪 The Front Door</ModalTitle>
        <p className="mb-3">
          The door creaks on rusted hinges... then swings slightly open on its own.
        </p>
        <p className="mb-3">
          A chill wind breathes through the gap. But something feels wrong —
          this is not the way out.
        </p>
        <p className="italic text-[#8b5e1a]">
          The true exit is hidden somewhere in this room.
        </p>
        <ModalBtnRow>
          <ModalBtn onClick={closeModal}>Step Back</ModalBtn>
        </ModalBtnRow>
      </>
    )
  }

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer z-[10] transition-all duration-300
                 hover:brightness-[1.8] hover:scale-105"
      style={{ top: '20%', right: '8%', width: 90, height: 160 }}
      title="The front door"
    >
      {/* Door frame */}
      <div
        className="w-full h-full relative overflow-hidden"
        style={{
          border: '4px solid #4a2c0a',
          background: '#1a0e07',
          borderRadius: '4px 4px 0 0',
        }}
      >
        {/* Door panel */}
        <div
          className="absolute inset-[8px] rounded transition-transform duration-[1200ms]"
          style={{
            background: 'linear-gradient(to right, #2a1508, #3d2010)',
            border: '1px solid #6b3a15',
            transformOrigin: 'left center',
            transform: ajar ? 'perspective(400px) rotateY(-50deg)' : 'none',
          }}
        >
          {/* Door knob */}
          <div
            className="absolute rounded-full"
            style={{
              right: 12, top: '50%', transform: 'translateY(-50%)',
              width: 8, height: 8,
              background: '#c0851a',
            }}
          />
        </div>
      </div>
    </div>
  )
}