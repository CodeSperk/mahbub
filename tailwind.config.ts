import type { Config } from "tailwindcss";

export default {
  safelist: [
    'page-bg', 'text-secondary', 'text-primary', 'bg-[#FFB400]', // Add any dynamically generated classes here
    'hover:text-[#FFB400]', // Include all variations
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
