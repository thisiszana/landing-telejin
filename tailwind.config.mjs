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
        textPurple: "rgba(44, 7, 103, 1)",
      },
      boxShadow: {
        headerShadow: "0px 4px 58.5px 0px rgba(57, 0, 219, 0.12)",
        inputShadow: "0px 0px 39px 0px #361BDB1F",
        bgcShadow1: "0px 0px 170px 170px #F4C8BE",
        bgcShadow2: "0px 0px 190px 150px #361BDB4A",
      },
      maxWidth: {
        "screen-xl": "1233px",
      },
    },
  },
  plugins: [],
};
