/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.75rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    screens: {
      xs: '380px',
      // sm: '640px',
      // md: '768px',
      ...defaultTheme.screens,
    },
		extend: {
      spacing: {
        'headerHeight': 'var(--headerHeight)',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',

      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
       gridRowStart: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',

        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
      },
      gridRowEnd: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
      },
			fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
			height: {
				dvh: "var(--dvh)",
        peek: "var(--peekHeight)",
        dvhMinusPeek: "var(--dvhMinusPeek)",
        dvhPlusPeek: "var(--dvhPlusPeek)",
				headerHeight: "var(--header-height)",
        footerHeight: "var(--footer-height)",
			},
      minHeight: {
        dvh: "var(--dvh)",
        footerHeight: "var(--footer-height)",
      },
      maxWidth: {
        '8xl': '1400px',
        'header': '1450px'
      },
			colors: {
				primary: "var(--primary)",
				dark: "#334155",
        darker: "#394659"
			},
      extend: {
        scale: {
            '-100': '-1',
        }
      },
      spacing: {
        headerHeight: "var(--header-height)",
      }
		},
	},
	plugins: [],
}
