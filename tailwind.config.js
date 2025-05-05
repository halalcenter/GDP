/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a237e",
        secondary: "#0d47a1",
        'vision-blue': '#103E57',
        'vision-gold': '#EFB73B',
      },
      fontFamily: {
        neoneon: ['Neoneon', 'cursive'],
      },
    },
  },
  plugins: [],
}
