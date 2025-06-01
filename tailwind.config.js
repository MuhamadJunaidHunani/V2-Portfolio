/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'bg-primaryC',
    'bg-secondaryC',
    'text-textC',
    'bg-backgroundC',
    'border-borderC',
    'text-textTC'
  ],
  theme: {
    extend: {
      colors: {
        primaryC: "var(--primC)",
        secondaryC: "var(--secC)",
        textC: "var(--txtC)",
        backgroundC: "var(--background-color)",
        borderC: "var(--border-color)",
        textTC: "var(--light-text-color)",
      },
    },
  },
  plugins: [],
};
