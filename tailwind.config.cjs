/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'futura-pt': ['"futura-pt"', 'sans-serif'],
			},
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
