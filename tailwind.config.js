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
          '05': 'var(--primary-05)',
          '04': 'var(--primary-04)',
          '03': 'var(--primary-03)',
          '02': 'var(--primary-02)',
          '01': 'var(--primary-01)',
        },
        secondary: {
          '05': 'var(--secondary-05)',
          '04': 'var(--secondary-04)',
          '03': 'var(--secondary-03)',
          '02': 'var(--secondary-02)',
          '01': 'var(--secondary-01)',
        },
        white: {
          '06': 'var(--white-06)',
          '05': 'var(--white-05)',
          '04': 'var(--white-04)',
          '03': 'var(--white-03)',
          '02': 'var(--white-02)',
          '01': 'var(--white-01)',
        },
        black: {
          '04': 'var(--black-04)',
          '03': 'var(--black-03)',
          '02': 'var(--black-02)',
          '01': 'var(--black-01)',
        },
        success: {
          '02': 'var(--success-02)',
          '01': 'var(--success-01)',
        },
        alert: {
          '01': 'var(--alert-01)',
        },
        danger: {
          '02': 'var(--danger-02)',
          '01': 'var(--danger-01)',
        },
      },
    },
  },
  plugins: [],
};
