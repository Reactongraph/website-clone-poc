/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aeonik': ['Aeonik Pro', 'sans-serif'],
      },
      backgroundImage: {
        bg: "url('/images/bg.jpg')",
        girl: "url('/images/girl.png')",
     },
    },
  },
  plugins: [],
}

