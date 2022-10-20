/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    
    extend: {
      colors:{
        'rocrange' : '#FF1E00',
        'rocrise' : '#59CE8F'
      },
    },
  },
  plugins: [
    require('flowbite/plugin',
    require("daisyui")
    )
  ],
}
