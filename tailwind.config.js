/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      syne: ['Syne', 'sans-serif']
    },
    extend: {
      scroll: 'var(--scroll)',
      colors: {
        transparentWhite: '#ffffff59',
        tgray: '#b8b8b880',
        tdgray: '#7a7a7a80',
        eggshell: '#f5f5f5',
        grey: '#71717a'
      },
    },
  },
  //@ts-ignore
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
