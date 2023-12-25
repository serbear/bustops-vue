/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bear-slate": {
          200: "#e2e8f0",
          900: "#433E3E",
        },
        "bear-cyan": {
          500: "#6BA39D",
          800: "#568A85",
          1500: "#1F3230",
        },
        "bear-yellow": {
          500: "#C0983A",
          800: "#9D7C2F",
          1500: "#2F250E",
        },
        "bear-sand": {
          500: "#CEC880",
          800: "#C0B85D",
          1500: "#2C2A11",
        },
        "bear-red": {
          500: "#962C3A",
          800: "#6F202B",
          1500: "#2F0E12",
        },
      },
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
