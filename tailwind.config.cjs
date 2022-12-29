/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    require('node:path').join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}',
    ),
  ],
  darkMode: 'class',
  plugins: [require('@skeletonlabs/skeleton/tailwind/theme.cjs')],
};
