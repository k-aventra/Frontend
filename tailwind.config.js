/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--shad-border))',
        input: 'hsl(var(--shad-input))',
        ring: 'hsl(var(--shad-ring))',
        background: 'hsl(var(--shad-background))',
        foreground: 'hsl(var(--shad-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--shad-primary))',
          foreground: 'hsl(var(--shad-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--shad-secondary))',
          foreground: 'hsl(var(--shad-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--shad-destructive))',
          foreground: 'hsl(var(--shad-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--shad-muted))',
          foreground: 'hsl(var(--shad-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--shad-accent))',
          foreground: 'hsl(var(--shad-accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--shad-popover))',
          foreground: 'hsl(var(--shad-popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--shad-card))',
          foreground: 'hsl(var(--shad-card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--shad-radius)',
        md: 'calc(var(--shad-radius) - 2px)',
        sm: 'calc(var(--shad-radius) - 4px)',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
