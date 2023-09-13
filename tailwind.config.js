/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray_100: '#E1E1E6',
        gray_300: '#C4C4CC',
        gray_400: '#8D8D99',
        gray_500: '#7C7C8A',
        gray_600: '#323238',
        gray_700: '#29292E',
        gray_800: '#202024',
        gray_900: '#121214',
        green_300: '#00B37E',
        green_500: '#00875F',
        green_700: '#015F43',
        red_300: '#F75A68',
        red_500: '#AB222E',
        red_700: '#7A1921',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-ferif'],
      },
      padding: {
        4.5: '18px',
        30: '120px',
      },

      maxWidth: {
        maxWidth: '1120px',
      },
    },
  },
  plugins: [],
}
