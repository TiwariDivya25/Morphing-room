import { playCreak } from '../../App'
import Modal, { ModalTitle, ModalCode, ModalBtn, ModalBtnRow } from '../Modal'
import { SECRET_CODE } from '../../App'

export default function Table({ tableRead, setTableRead, addInv, setHint, setModal, closeModal }) {
  function handleClick() {
    playCreak()
    if (!tableRead) {
      setTableRead(true)
      addInv('clue', '📜 Journal')
      setModal(
        <>
          <ModalTitle>📖 The Old Journal</ModalTitle>
          <p className="italic text-[#c4a06a] mb-3">
            The pages are brittle and smell of must. A trembling hand wrote these words:
          </p>
          <p className="mb-3">
            <em>
              "Remember what grandfather always said — the combination was never a date,
              but the age of the three sisters when we last were whole."
            </em>
          </p>
          <p className="mb-1">Below, in faded ink, three numbers are scratched:</p>
          <ModalCode code={SECRET_CODE} />
          <p className="text-sm text-[#8b5e1a]">
            A map nearby shows a chest marked with an X and the word{' '}
            <strong className="text-[#ffd700]">OPEN</strong>.
          </p>
          <ModalBtnRow>
            <ModalBtn onClick={() => { closeModal(); setHint('Use the code on the chest...') }}>
              Close Journal
            </ModalBtn>
          </ModalBtnRow>
        </>
      )
      setHint('You found a clue! Try the chest...')
    } else {
      setModal(
        <>
          <ModalTitle>📖 The Journal</ModalTitle>
          <p className="mb-2">You have already memorised the pages.</p>
          <ModalCode code={SECRET_CODE} />
          <ModalBtnRow>
            <ModalBtn onClick={closeModal}>Close</ModalBtn>
          </ModalBtnRow>
        </>
      )
    }
  }

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer z-[10] transition-all duration-300
                 hover:brightness-[1.8] hover:scale-105"
      style={{
        bottom: '28%', left: '50%', transform: 'translateX(-50%)',
        width: 180, height: 100,
        filter: 'drop-shadow(0 0 0px transparent)',
      }}
      title="A dusty old table"
    >
      {/* Table top surface */}
      <div
        className="w-full relative"
        style={{
          height: 30,
          background: 'linear-gradient(to bottom, #3d1f08, #2a1408)',
          borderRadius: '4px 4px 0 0',
          borderTop: '2px solid #6b3a15',
        }}
      >
        {/* Journal on table */}
        <div
          className="absolute text-xs text-[#ffd700] flex items-center justify-center animate-glowPulse rounded"
          style={{
            top: -18, left: 20, width: 40, height: 30,
            background: '#8b1a1a', border: '1px solid #c0392b',
            fontSize: 18,
          }}
        >
          📖
        </div>
        {/* Map on table */}
        <div
          className="absolute text-[8px] text-[#3d1f08] flex items-center justify-center
                     text-center leading-tight rounded"
          style={{
            top: -14, right: 20, width: 50, height: 35,
            background: '#c8a96e', border: '1px solid #8b7355',
          }}
        >
          MAP
        </div>
      </div>

      {/* Table legs */}
      <div className="flex justify-between px-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-b"
            style={{
              width: 12, height: 60,
              background: 'linear-gradient(to bottom, #2a1408, #1a0c04)',
            }}
          />
        ))}
      </div>
    </div>
  )
}