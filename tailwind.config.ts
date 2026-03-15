import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-purple": "#E0DDFE",
        "deep-purple": "#462e94",
        "dark-bg": "#090125",
        "card-bg": "#10072f",
      },
      fontFamily: {
        "tt-hoves": ["'TT Hoves'", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-33.333%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;