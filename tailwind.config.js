const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
        merriweather: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        grey: {
          25: "var(--color-grey-25)",
          50: "var(--color-grey-50)",
          100: "var(--color-grey-100)",
          150: "#D9D9D9",
          200: "var(--color-grey-200)",
          300: "var(--color-grey-300)",
          400: "var(--color-grey-400)",
          500: "var(--color-grey-500)",
          600: "var(--color-grey-600)",
          700: "var(--color-grey-700)",
          800: "var(--color-grey-800)",
          900: "var(--color-grey-900)",
        },
        primary: {
          25: "var(--color-primary-25)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        default: {
          25: "#FCF2E8",
          50: "#F6D5B6",
          100: "#E37915",
          200: "#CF6E13",
          300: "#A1560F",
          400: "#EFD7C6"

        },
        secondary: {
          100: "#F2F4F7",
          200: "#091219",
          900: "#0C111D"
        },
        tertiary: {
          100: "#D0D5DD",
          150: "#F2F4F7",
          175: "#667085",
          200: "#344054",
          300: "#1D2939",
          400: "#11202D",
        },
        lightBlue: {
          50: "#FFFFFF4D",
          100: "#C2D8F8"
        }
      },
    },
  },
  plugins: [],
};
