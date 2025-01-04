import type { Config } from "tailwindcss";

export default {
  safelist: [
    "page-bg",
    "text-secondary",
    "text-primary",
    "bg-[#FFB400]", // Add any dynamically generated classes here
    "hover:text-[#FFB400]",
    "mainHeading",
    "secondHeading",
    "midHeading",
    "leastHeading",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E5E5E5",
        secondary: "#CCCCCC",
        highlight: "#FFB400",
        button: "#4d204d",
        "button-hover": "#6c2c6c",
        shadow: "0px 5px 22px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        'page-bg': "linear-gradient(to right, #0F050E, #13040B, #0F050E)",
        'card-bg': "linear-gradient(to right, #251729, #3A1E3B, #251729)"
      },
    },
  },
  plugins: [],
} satisfies Config;
