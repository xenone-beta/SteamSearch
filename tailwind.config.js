/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        steam: {
          bg: '#1b2838',
          dark: '#171a21',
          light: '#2a475e',
          accent: '#66c0f4',
          green: '#a1cd44',
        }
      },
    },
  },
  plugins: [],
}
