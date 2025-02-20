import { Outfit, Ovo } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "sans-serif"],
      },
      boxShadow: {
        'black': '4px 4px 0px rgba(0, 0, 0, 0.25)',
        'white': '4px 4px 0px rgba(255, 255, 255, 0.25)',
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
