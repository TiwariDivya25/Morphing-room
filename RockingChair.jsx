import { playCreak } from '../../App'
import { useState } from 'react'

export default function RockingChair({ showWhisper }) {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    playCreak()
    if (!clicked) {
      setClicked(true)
      showWhisper('Someone was here...')
    } else {
      showWhisper('It still rocks on its own...')
    }
  }

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer z-[10] transition-all duration-300
                 hover:brightness-[1.8] hover:scale-105"
      style={{ bottom: '30%', left: '12%', width: 80, height: 110 }}
      title="A rocking chair..."
    >
      <svg
        viewBox="0 0 80 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-rock"
      >
        {/* Back posts */}
        <rect x="15" y="10" width="8" height="55" rx="2" fill="#3d1f08" stroke="#6b3a15" strokeWidth="1"/>
        <rect x="57" y="10" width="8" height="55" rx="2" fill="#3d1f08" stroke="#6b3a15" strokeWidth="1"/>
        {/* Seat */}
        <rect x="10" y="55" width="60" height="8" rx="3" fill="#4a2c0a" stroke="#6b3a15" strokeWidth="1"/>
        {/* Back rails */}
        <rect x="15" y="20" width="50" height="5" rx="2" fill="#3d1f08" stroke="#6b3a15"/>
        <rect x="15" y="33" width="50" height="5" rx="2" fill="#3d1f08" stroke="#6b3a15"/>
        <rect x="15" y="46" width="50" height="5" rx="2" fill="#3d1f08" stroke="#6b3a15"/>
        {/* Front legs */}
        <rect x="15" y="63" width="7" height="30" rx="2" fill="#2a1508" stroke="#6b3a15"/>
        <rect x="58" y="63" width="7" height="30" rx="2" fill="#2a1508" stroke="#6b3a15"/>
        {/* Rockers */}
        <ellipse cx="20" cy="97" rx="22" ry="6" stroke="#4a2c0a" strokeWidth="3" fill="none"/>
        <ellipse cx="60" cy="97" rx="22" ry="6" stroke="#4a2c0a" strokeWidth="3" fill="none"/>
      </svg>
    </div>
  )
}