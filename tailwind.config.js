/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Add this line
  ],
}
module.exports = {
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  // ... other config ...
};
