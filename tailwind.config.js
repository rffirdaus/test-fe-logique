module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(153deg, #712bda 30%, #a45deb 130%)',
        'custom-button': 'linear-gradient(98deg, #712bda -48%, #a45deb 52%);'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
