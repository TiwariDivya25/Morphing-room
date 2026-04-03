import { playCreak } from '../../App'
import { ModalTitle, ModalBtn, ModalBtnRow } from '../Modal'

export default function Doll({ dollMoved, setDollMoved, setModal, closeModal }) {
  function handleClick() {
    playCreak()
    if (!dollMoved) {
      setDollMoved(true)
      setTimeout(() => {
        setModal(
          <>
            <ModalTitle>🪆 The Doll</ModalTitle>
            <p className="mb-3">
              A porcelain doll with glassy eyes. It sits perfectly still now.
            </p>
            <p className="italic text-[#8b5e1a]">
              But you could have sworn it was facing the other direction a moment ago...
            </p>
            <ModalBtnRow>
              <ModalBtn onClick={closeModal}>Look Away</ModalBtn>
            </ModalBtnRow>
          </>
        )
      }, 400)
    } else {
      setModal(
        <>
          <ModalTitle>🪆 The Doll</ModalTitle>
          <p className="mb-3">Its blank gaze follows you across the room. You shiver.</p>
          <ModalBtnRow>
            <ModalBtn onClick={closeModal}>Look Away</ModalBtn>
          </ModalBtnRow>
        </>
      )
    }
  }

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer z-[10] text-3xl select-none
                 transition-all duration-[2000ms] hover:brightness-[1.8] hover:scale-110"
      style={{
        bottom: '32%',
        left: dollMoved ? '35%' : '30%',
      }}
      title="A porcelain doll"
    >
      🪆
    </div>
  )
}