import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["selector", "[data-theme=\"dark\"]"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
