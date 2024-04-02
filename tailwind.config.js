/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: "12px",
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "25px",
        {
          lineHeight: "37.5px",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "700",
        },
      ],
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sms: "386px",
      smm: "410px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        mred: "#BC2B2A",
        darkred: "#920100",
        primaryred: "#AF0100",
        secblue: "#184172",
        terblue: "#0E2744",
        dgray: "#D0D0D0",
        darkblue: "#13345B",
        textcol: "#06101B",
        gray: "#828282",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsbold: ["Poppins", "sans-serif", "700"],
        catamara: ["Catamaran", "sans-serif"],
        lobstertwo: ["Lobster Two", "sans-serif"],
      },
      spacing: {
        0: "0",
        0.2: "1px",
        0.5: "4px",
        1: "8px",
        1.2: "10px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
        10: "80px",
        11: "88px",
        12: "96px",
        14: "112px",
        16: "120px",
      },
      gridTemplateRows: {
        '40': 'repeat(2, 40px)',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
  },
  plugins: [],
};

