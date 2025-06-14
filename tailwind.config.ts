import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#47C2FF",
        grayBlue: "#475569",
        blueLight: "#def2ff",
        blueLiDark: "#a1d0e5",
        blueCard: "#030C20",
        blueCardLight: "#032043",
        blueTag: "#102841",
        grayTransparent: "rgba(128, 128, 128, 0.5)", // Gris transparente
        orangeLight: "#e6a169",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;