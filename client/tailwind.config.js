/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",

      //Main
      primary: "var(--c-primary)",
      dprimary: "var(--c-dprimary)",
      primary20: "var(--c-primary20)",
      secondary: "var(--c-secondary)",
      loadingPrimary: "var(--c-loadingPrimary)",

      //Surfaces
      sBackground: "var(--c-sBackground)",
      sPrimary: "var(--c-sPrimary)",
      sInput: "var(--c-sInput)",
      sDisabled: "var(--c-sDisabled)",

      //Text
      tPrimary: "var(--c-tPrimary)",
      tSecondary: "var(--c-tSecondary)",
      tDisabled: "var(--c-tDisabled)",

      //Icons
      iPrimary: "var(--c-iPrimary)",
      iSecondary: "var(--c-iSecondary)",
      iDisabled: "var(--c-iDisabled)",

      //Line and Borders
      linePrimary: "var(--c-linePrimary)",

      //Feedbacks
      error: "var(--c-error)",
      warning: "var(--c-warning)",
      success: "var(--c-success)",
      llError: "var(--c-llError)",
      llWarning: "var(--c-llWarning)",
      llSuccess: "var(--c-llSuccess)",
    },

    extend: {
      fontSize: {
        //H1
        h1: ["2rem", { lineHeight: "2.5rem", fontWeight: "400" }],
        "h1-light": ["2rem", { lineHeight: "2.5rem", fontWeight: "300" }],
        "h1-medium": ["2rem", { lineHeight: "2.5rem", fontWeight: "500" }],
        "h1-bold": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "h1-extra": ["2rem", { lineHeight: "2.5rem", fontWeight: "800" }],
        "h1-black": ["2rem", { lineHeight: "2.5rem", fontWeight: "900" }],

        //h2
        h2: ["1.5rem", { lineHeight: "2rem", fontWeight: "400" }],
        "h2-light": ["1.5rem", { lineHeight: "2rem", fontWeight: "300" }],
        "h2-medium": ["1.5rem", { lineHeight: "2rem", fontWeight: "500" }],
        "h2-bold": ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
        "h2-extra": ["1.5rem", { lineHeight: "2rem", fontWeight: "800" }],
        "h2-black": ["1.5rem", { lineHeight: "2rem", fontWeight: "900" }],

        //h3
        h3: ["1.25rem", { lineHeight: "2rem", fontWeight: "400" }],
        "h3-light": ["1.25rem", { lineHeight: "2rem", fontWeight: "300" }],
        "h3-medium": ["1.25rem", { lineHeight: "2rem", fontWeight: "500" }],
        "h3-bold": ["1.25rem", { lineHeight: "2rem", fontWeight: "700" }],
        "h3-extra": ["1.25rem", { lineHeight: "2rem", fontWeight: "800" }],
        "h3-black": ["1.25rem", { lineHeight: "2rem", fontWeight: "900" }],

        //h4
        h4: ["1.125rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "h4-light": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "300" }],
        "h4-medium": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "500" }],
        "h4-bold": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        "h4-extra": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "800" }],
        "h4-black": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "900" }],

        //h5
        h5: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "h5-light": ["1rem", { lineHeight: "1.5rem", fontWeight: "300" }],
        "h5-medium": ["1rem", { lineHeight: "1.5rem", fontWeight: "500" }],
        "h5-bold": ["1rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        "h5-extra": ["1rem", { lineHeight: "1.5rem", fontWeight: "800" }],
        "h5-black": ["1rem", { lineHeight: "1.5rem", fontWeight: "900" }],

        //h6
        h6: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
        "h6-light": ["0.75rem", { lineHeight: "1rem", fontWeight: "300" }],
        "h6-medium": ["0.75rem", { lineHeight: "1rem", fontWeight: "500" }],
        "h6-bold": ["0.75rem", { lineHeight: "1rem", fontWeight: "700" }],
        "h6-extra": ["0.75rem", { lineHeight: "1rem", fontWeight: "800" }],
        "h6-black": ["0.75rem", { lineHeight: "1rem", fontWeight: "900" }],

        //sub1
        sub1: ["1.125rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "sub1-light": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "300" }],
        "sub1-medium": [
          "1.125rem",
          { lineHeight: "1.5rem", fontWeight: "500" },
        ],
        "sub1-bold": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        "sub1-extra": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "800" }],
        "sub1-black": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "900" }],

        //sub2
        sub2: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "sub2-light": ["1rem", { lineHeight: "1.5rem", fontWeight: "300" }],
        "sub2-medium": ["1rem", { lineHeight: "1.5rem", fontWeight: "500" }],
        "sub2-bold": ["1rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        "sub2-extra": ["1rem", { lineHeight: "1.5rem", fontWeight: "800" }],
        "sub2-black": ["1rem", { lineHeight: "1.5rem", fontWeight: "900" }],

        //sub3
        sub3: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
        "sub3-light": ["0.75rem", { lineHeight: "1rem", fontWeight: "300" }],
        "sub3-medium": ["0.75rem", { lineHeight: "1rem", fontWeight: "500" }],
        "sub3-bold": ["0.75rem", { lineHeight: "1rem", fontWeight: "700" }],
        "sub3-extra": ["0.75rem", { lineHeight: "1rem", fontWeight: "800" }],
        "sub3-black": ["0.75rem", { lineHeight: "1rem", fontWeight: "900" }],

        //paragraph
        par: ["0.875rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "par-light": ["0.875rem", { lineHeight: "1.5rem", fontWeight: "300" }],
        "par-medium": ["0.875rem", { lineHeight: "1.5rem", fontWeight: "500" }],

        //button
        button: ["0.875rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "button-light": [
          "0.875rem",
          { lineHeight: "1.5rem", fontWeight: "300" },
        ],
        "button-medium": [
          "0.875rem",
          { lineHeight: "1.5rem", fontWeight: "500" },
        ],

        //caption
        caption: ["0.675rem", { lineHeight: "1rem", fontWeight: "400" }],
        "caption-light": [
          "0.675rem",
          { lineHeight: "1rem", fontWeight: "300" },
        ],
        "caption-medium": [
          "0.675rem",
          { lineHeight: "1rem", fontWeight: "500" },
        ],

        //overline
        overline: ["0.5rem", { lineHeight: "1rem", fontWeight: "400" }],
        "overline-light": ["0.5rem", { lineHeight: "1rem", fontWeight: "300" }],
        "overline-medium": [
          "0.5rem",
          { lineHeight: "1rem", fontWeight: "500" },
        ],
      },
      fontFamily: {
        sans: ["var(--font-default)", ...fontFamily.sans],
      },
      screens: {
        xs: "360px",
        sm: "576px",
        md: "768px",
      },
      boxShadow: {
        l1: "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px",
        /** Inputs */
        inputFocus: "0 0 0 0.125rem var(--c-primary)",
        inputError: "0 0 0 0.0625rem var(--c-error)",
        inputErrorFocus: "0 0 0 0.125rem var(--c-error)",
      },
      dropShadow: {
        l1: "rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px",
        /** Inputs */
        inputFocus: "0 0 0 0.125rem var(--c-primary)",
        inputError: "0 0 0 0.0625rem var(--c-error)",
        inputErrorFocus: "0 0 0 0.125rem var(--c-error)",
      },
    },
  },
  plugins: [],
};
