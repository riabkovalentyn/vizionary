module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    extend: {
      colors:{
        'cyberpunk-pink': '#FF007F',
        'cyberpunk-purple': '#8a2be2',
        'cyberpunk-green': '#00FF00',
        'cyberpunk-blue': '#00eaff'
      }
    }
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
