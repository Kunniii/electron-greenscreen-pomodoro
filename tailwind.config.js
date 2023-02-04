/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {},
  plugins: ["@tailwindcss/jit", "autoprefixer"],
};
