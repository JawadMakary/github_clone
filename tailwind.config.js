module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      textDecoration: ['active'],
    },
  },
  variants: {
    extend: {},
    borderStyle: ['responsive'],
  },
  plugins: [],
}
