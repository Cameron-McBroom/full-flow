module.exports = {
  content: ["./src/**/*.{html,js},"],
  darkMode: 'class',
  variants: {
    extend: {
      borderWidth: ['hover', 'focus', 'first', 'last'],
      brightness: ['hover']
    }
  },
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'ui-sans-serif'],
      'sans-serif': ['Source Serif Pro', 'ui-serif']
    },
    extend: {
      colors: {
        cblue: '#1A174A',
        cred: '#DE0404'
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
