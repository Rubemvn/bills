import type { Config } from 'tailwindcss';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				sans: [inter.style.fontFamily, 'Roboto'],
			},
		},
	},
	plugins: [],
} satisfies Config;
