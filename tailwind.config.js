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
      },
      animation: {
        spinCustom: "rotateCustom 3s linear infinite", // Animasi rotasi
        pulseCustom: "pulseCustom 2s ease-in-out infinite", // Animasi pulsasi
      },
      letterSpacing: {
        custom_md: "12px",
        custom_xs: "8px",
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
