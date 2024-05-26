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
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        title: 'var(--title-color)',
        'title-secondary': 'var(--title-secondary-color)',
        'background-secondary': 'var(--background-secondary-color)',
        'foreground-secondary': 'var(--foreground-secondary-color)',
        text: 'var(--text-color)',
        'text-secondary': 'var(--text-secondary-color)',
        'text-third': 'var(--text-third-color)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      spacing: {
        DEFAULT: 'var(--spacing-unit)',
      },
    },
  },
  plugins: [],
};
