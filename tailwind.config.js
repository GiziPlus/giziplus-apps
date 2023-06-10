/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}',
    './src/**/*.{js,jsx,ts,tsx}',
    './dist/*.html',
    './node_modules/flowbite/**/*.js'],
  theme: {
    colors: {
      primary: '#36d1dc',
      secondary: '#5b86e5',
      third: '#144d85',
      fourth: '#185da1',
      sixth: '#55b9dd',
    },
    screens: { md: '768px', lg: '1024px' },
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
};
