/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cust-white" : "#F8F8FB",
        "cust-blue" : "#009AAD",
        "cust-black" : "#3B4247",
        "cust-red" : "#AD0606",
      }
    },
  },
  plugins: [],
}

