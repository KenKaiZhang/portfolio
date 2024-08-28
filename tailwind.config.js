module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        "right-md": "4px 0 4px #0000001D",
        "left-md": "-4px 0 4px #0000001D"
      },
      backgroundImage: {
        "about-pic": "url('./images/smiski.jpg')",
        "profile-pic": "url('./images/profile.jpg')"
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
}
