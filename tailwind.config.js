/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {},
    screens: {
      pc: { max: "2560px" },
      tablet: { max: "769px" },
      mobile: { max: "426px" },
      phone: { max: "375px" },
      radio: { max: "320px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Graphik", "ui-sans-serif", "sans-srif", "system-ui"],
      serif: ["Merriweather", "serif", "Georgia", "ui-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    extend: {},
    plugins: [],
  },
};
