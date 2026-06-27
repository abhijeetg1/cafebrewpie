/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#3E2723', // Deep coffee brown
          medium: '#5D4037',
          light: '#8D6E63',
          cream: '#F5F5F0', // Off-white/cream
          terracotta: '#D84315', // Warm terracotta/amber accent
          accent: '#FF8A65' // Lighter accent
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
