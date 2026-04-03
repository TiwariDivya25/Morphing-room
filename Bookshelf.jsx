import { playCreak, playWhoosh } from '../../App'
import { ModalTitle, ModalBtn, ModalBtnRow } from '../Modal'

const BOOK_HEIGHTS = [
  [35,28,38,30,33,25,36],
  [42,38,44,36,40,42],
  [40,35,38,44,36,42,38],
  [44,36,40,38,42],
]
const BOOK_COLORS = ['#8b1a1a','#1a3a8b','#1a6b2a','#6b5a1a']

export default function Bookshelf({
  hasItem, passageOpen, setPassageOpen,
  shelfClicked, setShelfClicked,
  symbolsVisible, setSymbolsVisible,
  setHint, showWhisper, setModal, closeModal,
  onWin,
}) {
  function handleClick() {
    playCreak()

    if (!hasItem('key') && !shelfClicked) {
      setShelfClicked(true)
      setSymbolsVisible(true)
      showWhisper('The walls remember...')
      setHint('The bookshelf hides something. Find the key first.')
      setModal(
        <>
          <ModalTitle>📚 The Bookshelf</ModalTitle>
          <p className="mb-3">
            Heavy tomes line the shelves — dusty, forgotten. One spine reads{' '}
            <em>"Holloway Family Histories."</em>
          </p>
          <p className="mb-3">
            You feel a cool draft from behind the shelf. Something is not right here...
          </p>
          <p className="italic text-[#8b5e1a]">
            The bookshelf seems to conceal something. You'll need a reason to move it.
          </p>
          <ModalBtnRow><ModalBtn onClick={closeModal}>Step Back</ModalBtn></ModalBtnRow>
        </>
      )
      return
    }

    if (hasItem('key') && !passageOpen) {
      playWhoosh()
      setPassageOpen(true)
      setHint('The hidden passage is open! Enter to advance.')
      setModal(
        <>
          <ModalTitle>🚪 The Hidden Passage</ModalTitle>
          <p className="mb-3">
            You press on the shelf. With a deep groan, it swings inward.
          </p>
          <p className="mb-3">
            A cold, dark passage lies beyond, stretching into unknown depths.
            The air smells of earth and something older...
          </p>
          <p className="italic text-[#44ff88]">The way forward is open.</p>
          <ModalBtnRow>
            <ModalBtn green onClick={() => { closeModal(); onWin() }}>
              → Enter the Passage
            </ModalBtn>
            <ModalBtn onClick={closeModal}>Wait</ModalBtn>
          </ModalBtnRow>
        </>
      )
      return
    }

    if (passageOpen) {
      setModal(
        <>
          <ModalTitle>🚪 The Hidden Passage</ModalTitle>
          <p className="mb-3">The passage gapes open behind the bookshelf, waiting.</p>
          <ModalBtnRow>
            <ModalBtn green onClick={() => { closeModal(); onWin() }}>
              → Enter the Passage
            </ModalBtn>
            <ModalBtn onClick={closeModal}>Not Yet</ModalBtn>
          </ModalBtnRow>
        </>
      )
      return
    }

    // Already clicked, no key yet
    setHint('Find the key first.')
  }

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer z-[10] transition-all duration-300
                 hover:brightness-[1.8] hover:scale-105"
      style={{ top: '20%', left: '5%', width: 120, height: 200 }}
      title="A dusty bookshelf"
    >
      <div
        className="w-full h-full relative overflow-hidden rounded"
        style={{
          background: 'linear-gradient(to right, #2a1508, #3d1f0a)',
          border: '2px solid #6b3a15',
        }}
      >
        {BOOK_HEIGHTS.map((row, ri) => (
          <div key={ri}>
            <div className="flex items-end px-[6px] gap-[3px]" style={{ height: ri === 1 ? 52 : 48, paddingTop: 4 }}>
              {row.map((h, bi) => (
                <div
                  key={bi}
                  className="rounded-sm flex-shrink-0"
                  style={{
                    width: 12,
                    height: h,
                    background: BOOK_COLORS[bi % BOOK_COLORS.length],
                  }}
                />
              ))}
            </div>
            <div style={{ height: 3, background: '#6b3a15', margin: '0 4px' }} />
          </div>
        ))}
      </div>
    </div>
  )
}