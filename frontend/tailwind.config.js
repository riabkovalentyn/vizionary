/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyberpunk-pink': '#ff007f',
        'cyberpunk-blue': '#00eaff',
        'cyberpunk-purple': '#8a2be2',
        'cyberpunk-green': '#00ff00',
        'cyberpunk-dark': '#0d0d0d',
        'cyberpunk-light': '#f0f0f0',
      },
      backgroundImage: {
        'cyberpunk-gradient': 'linear-gradient(135deg, #ff007f 0%, #00eaff 100%)',
      },
      animation: {
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
        'background-pan': 'background-pan 10s linear infinite',
      },
      keyframes: {
        'neon-glow': {
          '0%': { textShadow: '0 0 5px #ff007f, 0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 40px #ff007f, 0 0 80px #ff007f' },
          '100%': { textShadow: '0 0 10px #00eaff, 0 0 20px #00eaff, 0 0 40px #00eaff, 0 0 80px #00eaff, 0 0 160px #00eaff' },
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

