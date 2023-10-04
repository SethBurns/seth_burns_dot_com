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
    },
  },
  //@ts-ignore
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
