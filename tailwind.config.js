/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"primary-color": "#2a7ae4"
			},
			textColor: {
				"primary-color": "#2a7ae4"
			},
			fontFamily: {
				"noto-sans": "'Noto Sans', system-ui, -apple-system, sans-serif"
			}
		},
	},
	plugins: [],
};
