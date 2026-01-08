/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
      colors: {
        // Option 3: Zen Focus - Teal/Emerald Theme
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Primary Light
          600: '#0d9488',  // Primary Main
          700: '#0f766e',  // Primary Dark
          800: '#115e59',
          900: '#134e4a',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Accent
          600: '#d97706',
        },
        zinc: {
          50: '#fafafa',   // Background (warm white)
          100: '#f4f4f5',  // Surface alt
          200: '#e4e4e7',  // Borders
          300: '#d4d4d8',
          400: '#a1a1aa',  // Muted text
          500: '#71717a',
          600: '#52525b',  // Body text
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',  // Headings (softer than black)
        }
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.03)',
        'md': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'lg': '0 4px 16px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'md': '0.75rem',  // 12px
        'lg': '1rem',     // 16px
        'xl': '1.5rem',   // 24px
        '2xl': '2rem',    // 32px
        '3xl': '3rem',    // 48px
      }
    },
  },
  plugins: [],
}
