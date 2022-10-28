/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "text-xl": ["20px", "30px"],
        "text-lg": ["18px", "28px"],
        "text-md": ["16px", "24px"],
      },
      colors: {
        gray: {
          25: "#FCFCFD",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          900: "#101828",
        },
      },
      backgroundImage: {
        profile: "url('/profile-photo.jpg')",
      },
    },
  },
  plugins: [],
};
