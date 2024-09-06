import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".display-large": {
          fontSize: "57px",
        },
        ".display-medium": {
          fontSize: "45px",
        },
        ".display-small": {
          fontSize: "36px",
        },
        ".headline-large": {
          fontSize: "32px",
        },
        ".headline-medium": {
          fontSize: "28px",
        },
        ".headline-small": {
          fontSize: "24px",
        },
        ".title-large": {
          fontSize: "22px",
        },
        ".title-medium": {
          fontSize: "17px",
        },
        ".title-small": {
          fontSize: "14px",
        },
        ".label-large": {
          fontSize: "14px",
        },
        ".label-medium": {
          fontSize: "12px",
        },
        ".label-small": {
          fontSize: "11px",
        },
        ".body-large": {
          fontSize: "16px",
        },
        ".body-medium": {
          fontSize: "14px",
        },
        ".body-small": {
          fontSize: "12px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    flowbite.plugin(),
  ],
};
export default config;
