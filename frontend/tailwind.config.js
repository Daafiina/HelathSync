/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
      },
      colors: {
        primary: "#0995b0",
        button: {
          DEFAULT: "#54b4d3",  // Base color
         hover:"#47a4c2",   
          focus: "#3995b0",   
          active: "#287893", 
        },
      },
    },
  },
  plugins: [],
};
