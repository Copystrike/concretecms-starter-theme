const properties = require('./properties.config.js')


/** @type {import('tailwindcss').Config} */
module.exports = {
  // We need to prefix all the classes with tw- because we don't want to override any bootstrap classes
  prefix: "tw-",
  important: true,
  content: [
    // path to your concretecms theme files because we need the class names from the theme files
    `${properties.concreteThemePath}/**/*.{php,html}`,
  ],
  // Inhere add tailwind classes that should always be included. Useful for the HTML Block in concreteCMS
  safelist: [
    {
      pattern: /tw-text-(red)-(500|600)/,
    },
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}