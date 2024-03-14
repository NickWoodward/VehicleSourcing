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
      '3xl': ['1.75rem', { lineHeight: '2.5rem' }],
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
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
      // "sm-v": { raw: '(max-height: 900px) and (min-width: 500px)' },
      "sm-v": {raw: '(max-height: 875px)'}, 
      "xs-v": {raw: '(max-height: 760px)'}, 
      "xxs-v": {raw: '(max-height: 679px)'},    

      ...defaultTheme.screens,
    },
		extend: {
      screens: {
        '3xl': '1600px',

      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      padding: {
        "header-sm": "1rem",
        "header": "2rem",
        "header-lg": "3rem",
        "page-xxs": "1.5rem",
        "page-xs":"2rem",
        "page-sm": "3rem",
        "page-md": "2.5rem",
        "page-lg": "4rem",
        "page-xl": "5rem",
      },

      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',

      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        "content-xxs": '1.5rem 1fr 1.5rem',
        "content-xs": '2rem 1fr 2rem',
        "content-sm": '4rem 1fr 4rem',
        "content-md": '6rem 1fr 6rem',
        "content-lg": '6rem 1fr 1fr',
        "content-xl": '2fr 7fr 7fr',
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
        '17': '17',

      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridColStart: {
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
      gridColEnd: {
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
      gridColumn: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
			fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'numberplate': ['UKNumberplate', 'Inter', 'sans-serif'],
      },
			height: {
				dvh: "var(--dvh)",
        svh: "var(--svh)",
        peek: "var(--peekHeight)",
        dvhMinusPeek: "var(--dvhMinusPeek)",
        dvhPlusPeek: "var(--dvhPlusPeek)",
				headerHeight: "var(--header-height)",
        "headerHeight-lg": "var(--header-height-lg)",
        footerHeight: "var(--footer-height)",
        brandCloudIcon: "40px",
			},
      minHeight: {
        dvh: "var(--dvh)",
        footerHeight: "var(--footer-height)",
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
        '10xl': '1800px',
        'header': '1450px'
      },
			colors: {
				primary: "var(--primary)",
        primaryDark: "var(--primaryDark)",
				dark: "var(--dark)",
        darker: "hsl(215 28% 24%)",
        offWhite: "hsl(215, 33%, 93%)",
        grey: "hsl(220 9% 46%)",
        textDark: "hsl(215 14% 34%)",
        textGray: "#888e98",
        circle: "var(--c-cirle)",
        gradientDark: "var(--gradient-dark)",
        gradientLight: "var(--gradient-light)",
        yellow: "var(--yellow)",
        background: "blue-200"

        // "#888e98" also maybe secondary?
			},
      scale: {
          '-100': '-1',
      },
    
      spacing: {
        headerHeight: "var(--header-height)",
      }
		},
	},
	plugins: [],
}
