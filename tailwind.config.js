/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				monalt: ["Montserrat Alternates", "sans-serif"],
			},
			colors: {
				davysgrey: "#4D4D4D",
				Vermillion: "#CD4631",
				PewterBlue: "#81ADC8",
				Champagne: "#F7EDE8",
				AliceBlue: "#EDF3F7",
			},
		},
	},
	plugins: [],
};
