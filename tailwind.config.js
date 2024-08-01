/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      width: ["important"],
      height: ["important"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      screens: {},
      backgroundImage: {},
      colors: {
        "Blue-100": "#B2CCFF",
        "Blue-200": "#6BA8FF",
        "Blue-300": "#4A9CFF",
        "Blue-400": "#008FF",
        "Blue-500": "#1580DF",
        "Blue-600": "#204E85",
        "Blue-700": "#1B304F",
        "Blue-800": "#292D32",
        "Blue-Primary": "#008FFF",
        Black: "#000",
        "Raisin-Black": "#252323",
        Grey: "#AEAEAE",
        "Dark-Grey": "#403F3F",
        "Light-Gray": "#D9D9D9",
        "Grey-500": "#F8F8F8",
        "Pale-White": "#F3F3F3",
        Dove_Grey: "#666666",
        White: "#FFF",
        "Approx-Nero": "#2B2A2A",
        "Withe-45": "rgba(255, 255, 255, 0.45)",
        Nero: "#1C1C1C",
        "Semi-Black": "rgba(0, 0, 0, 0.5)",
        "Shadow-Black": "rgba(0, 0, 0, 0.13)",
        "none-color": "rgba(0, 0, 0, 0)",
        "Kingly-Cloud": "#DEDEDE",
        "Dove-Gray": "#666",
        "black-60": "rgba(0, 0, 0, 0.60)",
      },
      boxShadow: {
        "main-shadow": "6px 8px 24px 0px rgba(0, 0, 0, 0.13))",
      },
      width: {
        280: "280px",
        278: "278px",
        169: "169px",
      },
      height: {
        138: "138px",
        85: "85px",
        75: "75px",
        68: "68px",
        "table-height": "calc(100% - 217px)",
        "table-bill": "calc(100% - 80px)",
        "table-body": "calc(100% - 56px)",
      },
      maxHeight: {
        "calc-table": "calc(100% - 150px)",
        "product-table-height": "calc(100% - 817px)",
      },
      padding: {
        4.5: "1.125rem",
      },
      fontSize: {
        xxs: "10px",
      },
      spacing: {
        // Simple 16 column grid
        16: "3.5rem",
        "0-auto": "0 auto",
      },
      borderRadius: {
        custom1: "35px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
