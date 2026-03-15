import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/modules/**/*.{ts,tsx}",
    "./src/shared/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F1E8",
        panel: "#FBF8F2",
        "panel-deep": "#F1E8DD",
        ink: "#1F1A17",
        "ink-soft": "#3D342D",
        muted: "#6B6258",
        line: "#D7CCBE",
        accent: "#6F5141",
        "accent-deep": "#5D4335",
        "accent-soft": "#E8DDD1",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 20px 50px rgba(82, 65, 50, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
