/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./src/pages/**/*.{js,ts,jsx,tsx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,css}"
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