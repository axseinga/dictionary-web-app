/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#FF5252",
        customPurple: "#A445ED",
        customBlack: "#050505",
        darkGrey1: "#1F1F1F",
        darkGrey2: "#2D2D2D",
        darkGrey3: "#3A3A3A",
        lightGrey1: "#757575",
        lightgrey2: "#E9E9E9",
        lightGrey3: "#F4F4F4",
        white: "#FFFFFF",
      },
      fontSize: {
        "body-s": ["0.875rem", "1.063rem"],
        "body-m": ["1.125rem", "1.5rem"],
        "heading-xs": ["1rem", "1.25rem"],
        "heading-s": ["1.25rem", "1.5rem"],
        "heading-m": ["1.5rem", "1.813rem"],
        "heading-l": ["2rem", "2.875rem"],
        "heading-lg": ["4rem", "4.875rem"],
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        inco: "Inconsolata, monospace",
        lora: "Lora, serif",
      },
      boxShadow: {
        "soft-light": "0px 4px 20px rgba(0, 0, 0, 0.1)",
        "soft-dark": "0px 4px 20px #a445eded",
      },
    },
  },
  plugins: [],
};
