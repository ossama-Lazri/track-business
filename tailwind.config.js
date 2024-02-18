/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#FFF7F0',
      },
      height: {
        header: '50.5rem',
      },
      fontFamily: {
        WorkSansLight: 'WorkSansLight',
        WorkSansRegular: 'WorkSansRegular',
        WorkSansMedium: 'WorkSansMedium',
        WorkSansSemiBold: 'WorkSansSemiBold',
        WorkSansBold: 'WorkSansBold',
        WorkSansExtraBold: 'WorkSansExtraBold',
        WorkSansBlack: 'WorkSansBlack',
      },
      keyframes: {
        scrollRightToLeft: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'scroll-right-to-left': 'scrollRightToLeft 30s linear infinite',
      },
    },
    screens: {
      'sm': '640px', 
      'md': '768px', 
      'lg': '1024px',
      'xl': '1280px',   
    },
  },
  plugins: [],
}