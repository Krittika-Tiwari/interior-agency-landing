import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F3EF", // page background
        "paper-alt": "#E8E8E2", // alternate sections
        card: "#FBFBF8",
        ink: "#0C0C14", // primary text, dark sections
        "ink-muted": "#4A4A57", // secondary text
        line: "#D3D3CB", // borders on light
        "dark-muted": "#A8A8B8", // secondary text on dark
        "dark-line": "#2A2A38", // borders on dark
        accent: "#2B3BFF", // cobalt
        "accent-deep": "#1A27C9", // accent hover
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        btn: "999px",
        tile: "20px",
      },
      minHeight: {
        btn: "52px",
      },
    },
  },
  plugins: [],
};

export default config;
