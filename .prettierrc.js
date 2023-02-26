module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',

  /* Tailwind  */
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
};
