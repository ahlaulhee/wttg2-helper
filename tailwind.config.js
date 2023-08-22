/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#0F111A",
      foreground: "#8F93A2",
      "custom-green": "#5AB977",
      "custom-light-green": "#22DA6E",
      "custom-yellow": "#ffcb6b",
      "custom-blue": "#82aaff",
      "custom-red": "#B54036",
      "custom-light-red": "#EF5350",
      "custom-purple": "#c792ea",
      "custom-orange": "#f78c6c",
      "custom-cyan": "#89ddff",
      "custom-gray": "#717CB4",
      "custom-white": "#eeffff",
      "custom-black": "#090B10",
    },
    fontFamily: {
      sans: ['"JetBrainsMono Nerd Font"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
