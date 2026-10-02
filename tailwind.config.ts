import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F1EA", // ivory page background
        "paper-alt": "#ECE4D8", // linen, alternate sections
        card: "#FCF9F4",
        ink: "#2A211C", // espresso: primary text, dark sections
        "ink-muted": "#62564C", // secondary text
        line: "#DCD0C0", // borders on light
        "dark-muted": "#CBBFAF", // secondary text on dark
        "dark-line": "#4A3E35", // borders on dark
        accent: "#A0522D", // terracotta clay
        "accent-deep": "#7F3F22", // accent hover
        brass: "#C9A46A", // highlights on dark
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      minHeight: {
        btn: "52px",
      },
    },
  },
  plugins: [],
};

export default config;
