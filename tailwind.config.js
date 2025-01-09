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
      fontFamily: {
        inter: "Inter, sans-serif",
        inconsolata: "Inconsolata, mono",
        inter: "Lora, serif",
      },
    },
  },
  plugins: [],
};
