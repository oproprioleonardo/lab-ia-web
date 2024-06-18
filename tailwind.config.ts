import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--serenity-font)"],
        primary: ["var(--serenity-font)"],
        secondary: ["var(--arboria-font)"],
        terciary: ["var(--aviano-font)"],
        title: ["var(--kallisto-font)"],
        mono: ["var(--reddit-font)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
