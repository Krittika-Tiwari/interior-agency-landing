import type { Config } from "tailwindcss";

// Tokens from the WEBSPHERX Figma design (dark surfaces + gold accent)
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          lowest: "#0E0E10",
          DEFAULT: "#131315",
          low: "#1B1B1D",
          high: "#201F21",
          highest: "#2A2A2C",
        },
        ink: {
          DEFAULT: "#E5E1E4", // primary text
          muted: "#D1C5B4", // body copy
          faint: "#9A8F80", // labels
          ghost: "#4E4639", // input placeholders
        },
        gold: {
          DEFAULT: "#E9C176",
          deep: "#C5A059",
          on: "#412D00", // text on gold
          "on-deep": "#4E3700", // text on deep gold
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        btn: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
        card: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
        header: "0px 1px 8px 0px rgba(0,0,0,0.4)",
        nav: "0px -4px 16px 0px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
