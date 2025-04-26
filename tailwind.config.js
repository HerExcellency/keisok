/** @type {import('tailwindcss').Config} */
const path = require('path');
export default {
  content: [
    path.resolve(__dirname, './index.html'),
    path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx,css}'),
  ],
    theme: {
      extend: {
        colors: {
          primary: '#4361EE',
          primaryLight: '#4CC9F0',
          primaryDark: '#3A0CA3',
          secondary: '#F72585',
          secondaryLight: '#FF9E00',
          accent: '#7209B7',
          light: '#F8F9FA',
          lightGray: '#E9ECEF',
          darkGray: '#495057',
          dark: '#212529',
        },
      },
    },
    plugins: [],
  }

