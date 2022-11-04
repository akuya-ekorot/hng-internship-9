/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "display-2xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            tracking: "-2%",
          },
        ],
        "display-xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            tracking: "-2%",
          },
        ],
        "display-lg": [
          "3rem",
          {
            lineHeight: "3.75rem",
            tracking: "-2%",
          },
        ],
        "display-md": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            tracking: "-2%",
          },
        ],
        "display-sm": ["1.875rem", "2.375rem"],
        "display-xs": ["1.5rem", "2rem"],
        xl: ["1.25rem", "1.875rem"],
        lg: ["1.125rem", "1.75rem"],
        md: ["1rem", "1.5rem"],
        sm: ["0.875rem", "1.25rem"],
        xs: ["0.75rem", "1.125rem"],
      },
      colors: {
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        primary: {
          25: "#F5FAFF",
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#53B1FD",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          800: "#1849A9",
          900: "#194185",
        },
        "hover-blue": "#ebe9fe",
      },
      backgroundImage: {
        profile: "url('/src/profile-photo.jpg')",
        "profile-hover":
          "linear-gradient(0deg, rgba(52, 64, 84, 0.75), rgba(52, 64, 84, 0.75)), url('/src/profile-photo.jpg')",
      },
      backgroundSize: {
        camera: "contain, contain",
      },
      content: {
        link: 'url("/src/check.svg")',
      },
    },
  },
  plugins: [],
};
