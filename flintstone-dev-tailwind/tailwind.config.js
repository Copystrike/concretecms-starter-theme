/** @type {import('tailwindcss').Config} */
module.exports = {
  // We need to prefix all the classes with tw- because we don't want to override any bootstrap classes
  prefix: "tw-",
  important: true,
  content: [
    // path to your concretecms theme files because we need the class names from the theme files
    "/app/cms/application/themes/flintstone/**/*.{php,html}"
  ],
  safelist: [
    'tw-text-2xl',
    'tw-text-3xl',
    'tw-font-black',
    {
      pattern: /tw-text-(\w+)-(100|200|300|400|500|600|700|800|900)/,
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