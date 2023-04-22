module.exports = {
  content: ['./**/*.php', './src/**/*.js'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    fontFamily: {
      forum: ['Forum', 'cursive'],
      rubik: ['Rubik', 'sans-serif'],
    },
  },
}
