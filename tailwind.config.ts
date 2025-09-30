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
        lightGreen: '#54b689', // href, CTA buttons
        darkGreen:'#6ec19b', // CTA buttons hover, navbar-href: hover, navbar-href:current
        lightGrey: '#4f4f4f', // body-text, CTA buttons
        darkGrey:'#292929', // h1, h2, h3, h4... / CTA buttons:hover
        white:'#ffffff', // background, buttons' text

      },
      fontFamily: {
      poppins: ["var(--font-poppins)"]      
    },

      fontWeight: {
        thin: "100",
        normal: "400",
        bold: "700"
      },
      fontSize: {
        h1Mobile: "1.5rem",
        h2Mobile: "1.313rem",
        h3Mobile: "1.125rem",
        textMobile: "1rem",
        textSmallMobile: ".875rem"
      },
      lineHeight: {
        normal: "1.5rem",
        thin: "1.313rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
