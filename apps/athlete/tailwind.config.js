const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-800': 'var(--primary-800)',
        'secondary-400': 'var(--secondary-400)',
      },
      boxShadow: {
        '3xl': '0 -1px 20px  rgba(0, 0, 0, 0.2)',
        '4xl': '0px 4px 20px 0px rgba(0, 0, 0, 0.11)',
        '5xl': '0px 3px 20px 0px rgba(11, 77, 82, 0.18)'
      }
    },
  },
  plugins: [],
};
