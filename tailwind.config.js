module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '35': '35%'
      },
      backgroundImage: theme => ({
        'card-pattern': "url('/img/card-bg.png')",
       })
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}
