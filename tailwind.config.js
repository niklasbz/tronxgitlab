/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "form-label-color": "var(--form-label-color)",
        "border-color": "var(--border-color)",
        "page-color": "var(--page-color)",
        "caret-color": "#1280c6",
        "link-color": "var(--link-color)",
      },
      fontFamily: {
        "font-stack": "var(--font-stack)"
      },
      fontSize: {
        "title": "19px",
        "subtitle": "13px",
        "text": "14px",
      },
      letterSpacing: {
        "title": ".5px",
      },
      rotate: {
        "180": "-180deg",
      }
    },
  },
}
