module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue,njk}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#324740',
        secondary: '#EAF1E4',
      },
    },
  },
  plugins: [],
};
