import type { Config } from "tailwindcss"

const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        primary: "#0e5c86",
        secondary: "#dd8c5c",
        accent: "#e2f0d3",
        muted: "#f7ccab",
      },
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
