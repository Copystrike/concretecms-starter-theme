/** @type {import('tailwindcss').Config} */
module.exports = {
  // We need to prefix all the classes with tw- because we don't want to override any bootstrap classes
  prefix: "tw-",
  important: true,
  content: [
    // path to your concretecms theme files because we need the class names from the theme files
    "/app/cms/application/themes/**/*.{php,html}"
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