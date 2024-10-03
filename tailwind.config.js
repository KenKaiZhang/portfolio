module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--text-color, 223, 223, 223), ${opacityValue})`;
          }
          return `rgb(var(--text-color, 223, 223, 223))`;
        },
        darkMain: "#1F1F1F",
        darkAccent: "#DFDFDF"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        "right-md": "4px 0 4px #0000001D",
        "left-md": "-4px 0 4px #0000001D",
        "top": "0px -5px 10px 10px #0000004D"
      },
      backgroundImage: {
        "about-pic": "url('./images/smiski.jpg')",
        "profile-pic": "url('./images/profile.jpg')"
      },
      letterSpacing: {
        "wide": "0.5rem",
        "wider": "2rem"
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
      })
    },
  ],
}
