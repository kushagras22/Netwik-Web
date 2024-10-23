/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // This is fine
    "./src/**/*.{js,ts,jsx,tsx}",  // Corrected to include files in all subdirectories
  ],
  theme: {
    extend: {
      backgroundImage: {
        'animated-gradient': 'linear-gradient(135deg, #38bdf8, #22d3ee)', // Custom gradient background
      },
    },
  },
  plugins: [],
}
