module.exports = {
  content: ["./src/**/*.{html,js},"],
  darkMode: 'class',
  variants: {
    extend: {
      borderWidth: ['hover', 'focus', 'first', 'last'],
      brightness: ['hover'],
      display: ['hover']
    }
  },
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'ui-sans-serif'],
      'sans-serif': ['Source Serif Pro', 'ui-serif']
    },
    extend: {
      colors: {
        "ff-text": '#1A174A',
        "ff-primary-blue": '#0799EB',
        "ff-secondary-blue": '#07C2EB',
      },
      transitionProperty: {
        'height': 'height'
      },
      fontSize: {
        'base': '1.125rem'
      },
    },
  },
  plugins: [],
}
