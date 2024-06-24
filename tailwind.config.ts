import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/searchlib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "3.5rem",
        md: "4rem",
        xl: "6rem",
        "2xl": "11rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EC2E22",
          100: "#FEE3D2",
          200: "#FDC1A6",
          300: "#F99679",
          400: "#F36D57",
          500: "#EC2E22",
          600: "#CA181D",
          700: "#A91121",
          800: "#880A22",
          900: "#710623",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
