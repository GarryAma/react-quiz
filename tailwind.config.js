/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateCustom: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseCustom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        bounceCustom: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        spinCustom: "rotateCustom 6s linear infinite", // Animasi rotasi
        pulseCustom: "pulseCustom 2s ease-in-out infinite", // Animasi pulsasi
        bounceCustom: "bounceCustom 0.7s infinite ",
      },
      letterSpacing: {
        custom_md: "12px",
        custom_xs: "6px",
      },
      scale: {
        97: "0.97",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         rotateCustom: {
//           "0%": { transform: "rotate(0deg)" },
//           "100%": { transform: "rotate(360deg)" },
//         },
//         pulseCustom: {
//           "0%, 100%": { transform: "scale(1)" },
//           "50%": { transform: "scale(1.2)" },
//         },
//       },
//       animation: {
//         spinCustom: "rotateCustom 3s linear infinite", // Animasi rotasi
//         pulseCustom: "pulseCustom 2s ease-in-out infinite", // Animasi pulsasi
//       },
//     },
//   },
//   plugins: [],
// };
