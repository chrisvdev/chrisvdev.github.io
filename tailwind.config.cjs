/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'futura-pt': ['"futura-pt"', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			gridTemplateColumns:{
				'13': 'repeat(13, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'17': 'repeat(17, minmax(0, 1fr))',
				'18': 'repeat(18, minmax(0, 1fr))',
				'19': 'repeat(19, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))',
				'21': 'repeat(21, minmax(0, 1fr))',
				'22': 'repeat(22, minmax(0, 1fr))',
				'23': 'repeat(23, minmax(0, 1fr))',
				'24': 'repeat(24, minmax(0, 1fr))',
				'25': 'repeat(25, minmax(0, 1fr))',
				'26': 'repeat(26, minmax(0, 1fr))',
				'27': 'repeat(27, minmax(0, 1fr))',
				'28': 'repeat(28, minmax(0, 1fr))',
				'29': 'repeat(29, minmax(0, 1fr))',
			}
		},
		screens: {
			'sm': '300px',
			// => @media (min-width: 640px) { ... }

			'md': '640px',
			// => @media (min-width: 768px) { ... }

			'lg': '768px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1024px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1280px',
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: [],
}
