/**
 * Now Batting — Tailwind v3+ config
 * Drop in as `tailwind.config.js` or import into an existing config via theme.extend.
 */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './pages/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nb: {
          bg: '#F6F4EF',
          surface: '#FFFFFF',
          divider: 'rgba(0,0,0,0.06)',
          dividerStrong: 'rgba(0,0,0,0.13)',
          text: {
            DEFAULT: '#1F1F1F',
            primary: '#1F1F1F',
            secondary: '#4A4A4A',
            muted: '#6B6B6B',
          },
          neon: '#DFFF00',
          daylight: '#B8CC00',
          dark: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'nb-mono':  ['11px', { lineHeight: '1.4',  letterSpacing: '0.18em' }],
        'nb-small': ['14px', { lineHeight: '1.5' }],
        'nb-body':  ['16px', { lineHeight: '1.55' }],
        'nb-h2':    ['22px', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        'nb-h1':    ['32px', { lineHeight: '1',    letterSpacing: '-0.02em' }],
        'nb-display': ['96px', { lineHeight: '0.9', letterSpacing: '-0.035em' }],
      },
      fontWeight: {
        nbRegular:  '400',
        nbMedium:   '500',
        nbSemibold: '600',
        nbBold:     '700',
        nbBlack:    '800',
      },
      borderRadius: {
        'nb-sm': '8px',
        'nb-md': '12px',
        'nb-lg': '16px',
      },
      spacing: {
        'nb-1':  '4px',
        'nb-2':  '8px',
        'nb-3':  '12px',
        'nb-4':  '16px',
        'nb-5':  '20px',
        'nb-6':  '24px',
        'nb-8':  '32px',
        'nb-10': '40px',
        'nb-12': '48px',
        'nb-16': '64px',
      },
      minHeight: {
        'nb-tap': '44px',
        'nb-btn': '52px',
      },
      height: {
        'nb-btn': '52px',
        'nb-progress': '5px',
      },
      transitionDuration: {
        'nb-fast': '150ms',
        'nb-base': '200ms',
        'nb-slow': '250ms',
      },
      scale: {
        'nb-tap': '0.98',
      },
      boxShadow: {
        'nb-neon': '0 0 10px rgba(223, 255, 0, 0.5)',
      },
      letterSpacing: {
        'nb-tight':   '-0.02em',
        'nb-display': '-0.035em',
        'nb-wide':    '0.18em',
      },
    },
  },
  plugins: [],
};
