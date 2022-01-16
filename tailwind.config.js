module.exports = {
  mode: 'jit',
  content: ['./dist/**/*.html', './src/**/*.njk'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#324740',
        secondary: '#EAF1E4',
      },
      boxShadow: {
        '3xl': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);',
      },
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
