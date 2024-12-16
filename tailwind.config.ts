import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        grayLight: 'var(--grayLight)',
        green: 'var(--green)',
        violet: 'var(--violet)',
        yellow: 'var(--yellow)',
        white: 'var(--white)',
      },
      screens: {
        xxl: '2560px',
      }
    },
  },
  plugins: [],
} satisfies Config;
