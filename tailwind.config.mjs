/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1140B9",
        primaryIcon: "#4B7DFF5C",
        primaryHover: "#0047ff",
        bgcColor1: "#F4C8BE",
        bgcColor2: "#361BDB4A",
        bgcColor3: "#0077E44A",
        bgcColor4: "#FF00D64A",
        cardColor1: "#FF8A8A",
        textPurple: "rgba(44, 7, 103, 1)",
      },
      boxShadow: {
        headerShadow: "0px 4px 58.5px 0px rgba(57, 0, 219, 0.12)",
        inputShadow: "0px 0px 39px 0px #361BDB1F",
        bgcShadow1: "0px 0px 170px 170px #F4C8BE",
        bgcShadow2: "0px 0px 190px 170px #361BDB4A",
        bgcShadow3: "0px 0px 190px 170px #F4C8BE",
        bgcShadow4: "0px 0px 170px 170px #0077E44A",
        bgcShadow5: "0px 0px 170px 170px #FF00D64A",
        cardShadowSm1: "0px 0px 28px 18px #FF8A8A",
        cardShadowMain1: "0px 0px 30px 20px #FF8A8A",
      },
      maxWidth: {
        "screen-lg": "1010.38px",
        "screen-xl": "1233px",
      },
    },
  },
  plugins: [],
};
