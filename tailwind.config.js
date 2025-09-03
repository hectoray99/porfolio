/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6366f1", // indigo-500
        brand: {
          light: "#93c5fd",
          DEFAULT: "#3b82f6",
          dark: "#1e40af",
        },
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
}
