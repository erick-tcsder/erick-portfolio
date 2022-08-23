/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3A5AFF',
        fuscia: '#D942FF',
        light: '#F1F1F1',
        dark: '#0F0F14'
      },
      fontFamily:{
        sans: ['Poppins', 'ui-sans-serif'],
        mono: ['Space Mono', 'ui-monospace']
      }
    },
  },
  plugins: [],
}
