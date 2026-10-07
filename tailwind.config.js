/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-900': '#0f172a',
        'navy-800': '#1e293b',
        'navy-700': '#334155',
        'navy-600': '#475569',
        'cyan-accent': '#06b6d4',
        'cyan-hover': '#0891b2',
      }
    },
  },
  plugins: [],
}
