import { useState, useCallback } from 'react'
import TitleScreen from './components/TitleScreen'
import WinScreen   from './components/WinScreen'
import Room        from './components/Room'

// ─── Global audio helper ──────────────────────────────────────────────────────
let audioCtx = null
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  return audioCtx
}

export function playCreak() {
  try {
    const ac = getAudio()
    const osc = ac.createOscillator()
    const gain = ac.createGain()
    osc.connect(gain); gain.connect(ac.destination)
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(80, ac.currentTime)
    osc.frequency.exponentialRampToValueAtTime(40, ac.currentTime + 0.6)
    gain.gain.setValueAtTime(0.08, ac.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.6)
    osc.start(); osc.stop(ac.currentTime + 0.7)
  } catch (e) { /* silent fail */ }
}

export function playChime() {
  try {
    const ac = getAudio()
    ;[523, 659, 784].forEach((f, i) => {
      const osc = ac.createOscillator()
      const gain = ac.createGain()
      osc.connect(gain); gain.connect(ac.destination)
      osc.type = 'sine'; osc.frequency.value = f
      const t = ac.currentTime + i * 0.15
      gain.gain.setValueAtTime(0, t)
      gain.gain.linearRampToValueAtTime(0.12, t + 0.05)
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2)
      osc.start(t); osc.stop(t + 1.3)
    })
  } catch (e) {}
}

export function playUnlock() {
  try {
    const ac = getAudio()
    const osc = ac.createOscillator()
    const gain = ac.createGain()
    osc.connect(gain); gain.connect(ac.destination)
    osc.type = 'square'
    osc.frequency.setValueAtTime(200, ac.currentTime)
    osc.frequency.exponentialRampToValueAtTime(400, ac.currentTime + 0.2)
    gain.gain.setValueAtTime(0.07, ac.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.4)
    osc.start(); osc.stop(ac.currentTime + 0.5)
  } catch (e) {}
}

export function playWhoosh() {
  try {
    const ac = getAudio()
    const buf = ac.createBuffer(1, ac.sampleRate * 0.8, ac.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.5
    const src  = ac.createBufferSource()
    const filt = ac.createBiquadFilter()
    const gain = ac.createGain()
    filt.type = 'bandpass'; filt.frequency.value = 400; filt.Q.value = 0.5
    src.buffer = buf
    src.connect(filt); filt.connect(gain); gain.connect(ac.destination)
    gain.gain.setValueAtTime(0.15, ac.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.8)
    src.start(); src.stop(ac.currentTime + 0.9)
  } catch (e) {}
}
// ─────────────────────────────────────────────────────────────────────────────

// The secret code players must find and use
export const SECRET_CODE = '4 7 2'

export default function App() {
  // Game phases: 'title' | 'playing' | 'won'
  const [phase, setPhase] = useState('title')

  const startGame = useCallback(() => setPhase('playing'), [])
  const winGame   = useCallback(() => setPhase('won'),     [])
  const resetGame = useCallback(() => setPhase('title'),   [])

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0a0704]">
      {phase === 'title'   && <TitleScreen onStart={startGame} />}
      {phase === 'playing' && <Room onWin={winGame} />}
      {phase === 'won'     && <WinScreen onReset={resetGame} />}
    </div>
  )
}