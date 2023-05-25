/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'],
  theme: {
    colors: {
      primary: '#36d1dc',
      secondary: '#5b86e5',
      third: '#144d85',
      fourth: '#185da1',
      sixth: '#55b9dd',
    },
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
};
