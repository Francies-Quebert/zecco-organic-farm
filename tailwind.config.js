/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'KronaOne': 'KronaOne',
        'Interstate': 'Interstate',
        'Gilroy': 'Gilroy',
        'Gilroy-light': 'Gilroy light',
        'Raleway': 'Raleway',
      },
      colors: {
        accent: '#1D1D1D',
        primary: '#A2DE96'
      },
      animation: {
        'bounce-stop': 'bounce 1s ease-out 0s 3',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

