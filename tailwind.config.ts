import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        arsenal: {
          red: "#EF0107",
          dark: "#063672",
          gold: "#9C824A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
