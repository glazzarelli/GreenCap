module.exports = {
  theme: {
    extend: {
      colors: {
        'lime-green': '#CDFF00',
        'teal': '#008080',
        'purple': '#800080',
        'greencap': '#1ca34b',
        'greencap2': '#1eb854',
        'grey': '#e2e0f0',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
      },

      animation: {
        blob: "blob 8s infinite",
      },
      // Define the keyframes for the "blob" animation
      keyframes: {
        blob: {
          // At the beginning of the animation, the element is not transformed
          "0%": {
            transform: "scale(1)",
          },
          // At 33% of the animation, the element is translated right and up and scaled up
          "33%": {
            transform: "translate(30px, -20px) scale(1.1)",
          },
          // At 66% of the animation, the element is translated left and scaled down
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          // At the end of the animation, the element is not transformed
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#109307",
          "secondary": "#7EBDC3",
          "accent": "#FFBF00",
          "neutral": "#171821",
          "base-100": "#E2E0F0",
          "info": "#4072CE",
          "success": "#4DD5A6",
          "warning": "#F1BE5F",
          "error": "#DE4135",
          "labels": "#aa2307",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "0.5px",
          "--tab-border": "0.5px",
          "--tab-radius": "0.5rem",
        },
        dark: {
          "primary": "#1EB854",
          "secondary": "#1FD65F",
          "accent": "#D99330",
          "neutral": "#110E0E",
          "base-100": "#171212",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "labels": "#ffffff",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "0.5px",
          "--tab-border": "0.5px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};