/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      blur: {
        custom: '7px', // Custom blur value
      },
      width: {
        500: '500px', // Custom width value
      },
      colors: {
        darkblack: 'rgb(11,12,24)', // Custom color
      },
      animation: {
        'border-glow': 'border-glow 2s linear infinite', // Border glow animation
        slide: 'slide 1s ease-in-out forwards', // Slide animation
      },
      keyframes: {
        'border-glow': {
          '0%': { boxShadow: '0 0 5px red, inset 0 0 10px red' },
          '50%': { boxShadow: '0 0 20px red, inset 0 0 30px red' },
          '100%': { boxShadow: '0 0 5px red, inset 0 0 10px red' },
        },
        slide: {
          '0%': { transform: 'translateX(-50%)' }, 
          '100%': { transform: 'translateX(0%)' },
        },
        
      },
    },
  },
  plugins: [
    // Adding smooth scroll behavior as a custom plugin
    function ({ addBase }) {
      addBase({
        html: {
          scrollBehavior: 'smooth',
        },
      });
    },
  ],
};
