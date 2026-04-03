/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      colors: {
        ember: {
          50:  '#fff8f0',
          100: '#ffe8c8',
          200: '#ffc880',
          300: '#ff9f30',
          400: '#ff8c00',
          500: '#e06000',
          600: '#a04000',
          700: '#6b2800',
          800: '#3d1500',
          900: '#1a0800',
        },
        wood: {
          100: '#6b3a15',
          200: '#4a2c0a',
          300: '#3d1f08',
          400: '#2a1508',
          500: '#1a0c04',
          600: '#0f0805',
          700: '#0a0704',
        }
      },
      animation: {
        'flicker':    'flicker 3s infinite',
        'swing':      'swing 4s ease-in-out infinite',
        'rock':       'rock 3s ease-in-out infinite',
        'fogDrift':   'fogDrift 8s ease-in-out infinite',
        'glowPulse':  'glowPulse 2s infinite',
        'lightFlicker':'lightFlicker 6s infinite',
        'portalSpin': 'portalSpin 4s linear infinite',
        'titleGlow':  'titleGlow 3s infinite',
        'winGlow':    'winGlow 2s infinite',
        'invAppear':  'invAppear 0.4s both',
        'fadeIn':     'fadeIn 0.4s both',
        'fadeInSlow': 'fadeIn 1.5s both',
      },
      keyframes: {
        flicker: {
          '0%,100%': { opacity: '1', transform: 'translateX(-50%) scale(1)' },
          '20%':     { opacity: '0.7', transform: 'translateX(-50%) scale(0.97)' },
          '40%':     { opacity: '1', transform: 'translateX(-50%) scale(1.02)' },
          '60%':     { opacity: '0.85', transform: 'translateX(-50%) scale(0.99)' },
          '80%':     { opacity: '1', transform: 'translateX(-50%) scale(1.01)' },
        },
        swing: {
          '0%,100%': { transform: 'translateX(-50%) rotate(-3deg)' },
          '50%':     { transform: 'translateX(-50%) rotate(3deg)' },
        },
        rock: {
          '0%,100%': { transform: 'rotate(-5deg)' },
          '50%':     { transform: 'rotate(5deg)' },
        },
        fogDrift: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.7' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 4px #ff6600' },
          '50%':     { boxShadow: '0 0 12px #ffd700, 0 0 20px rgba(255,165,0,0.4)' },
        },
        lightFlicker: {
          '0%,100%': { background: 'rgba(0,0,0,0)' },
          '5%':      { background: 'rgba(0,0,0,0.4)' },
          '6%':      { background: 'rgba(0,0,0,0)' },
          '7%':      { background: 'rgba(0,0,0,0.3)' },
          '8%':      { background: 'rgba(0,0,0,0)' },
          '51%':     { background: 'rgba(0,0,0,0.2)' },
          '52%':     { background: 'rgba(0,0,0,0)' },
        },
        portalSpin: {
          '0%':   { transform: 'scale(1) rotate(0deg)' },
          '50%':  { transform: 'scale(1.1) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
        titleGlow: {
          '0%,100%': { textShadow: '0 0 20px rgba(255,165,0,0.4)' },
          '50%':     { textShadow: '0 0 40px rgba(255,165,0,0.8), 0 0 60px rgba(255,100,0,0.3)' },
        },
        winGlow: {
          '0%,100%': { textShadow: '0 0 20px rgba(68,255,136,0.5)' },
          '50%':     { textShadow: '0 0 60px rgba(68,255,136,0.9), 0 0 80px rgba(0,200,80,0.4)' },
        },
        invAppear: {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}