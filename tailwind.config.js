/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      borderRadius: {
        'apple': '12px',
      },
      keyframes: {
        'apple-fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(8px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'apple-scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'apple-fade-in': 'apple-fade-in 0.6s cubic-bezier(0.0, 0.0, 0.2, 1) forwards',
        'apple-scale-in': 'apple-scale-in 0.4s cubic-bezier(0.0, 0.0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
}
