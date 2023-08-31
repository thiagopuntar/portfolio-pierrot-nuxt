/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.vue'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          '05': '#DCCFE9',
          '04': '#8300E9',
          '03': '#430C79',
          '02': '#451971',
          '01': '#290D44',
        },
        secondary: {
          '05': '#F8F3CA',
          '04': '#F1E9A0',
          '03': '#C9BA2F',
          '02': '#F8D350',
          '01': '#D29C0A',
        },
        white: {
          '06': '#FBFBF7',
          '05': '#FFFFFC',
          '04': '#FAFAFA',
          '03': '#FCFCFC',
          '02': '#EFEFFF',
          '01': '#EDF1F6',
        },
        black: {
          '04': '#5B5E6E',
          '03': '#323649',
          '02': '#444444',
          '01': '#211D28',
        },
        success: {
          '02': '#A9FF80',
          '01': '#8EF35E',
        },
        alert: {
          '01': '#4CC6FB',
        },
        danger: {
          '02': '#F16161',
          '01': '#FF8080',
        },
      },
    },
  },
  plugins: [],
};
