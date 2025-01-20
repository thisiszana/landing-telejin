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
        primaryHover: "#0047ff",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        headerShadow: "0px 4px 58.5px 0px rgba(57, 0, 219, 0.12)"
      }
    },
  },
  plugins: [],
};
