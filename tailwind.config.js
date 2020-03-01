module.exports = {
	theme: {
		extend: {
			borderRadius: {
				'4': '1rem',
			},
			colors: {
				borderColor: '#dcdfe6',
				borderLine: '#cbd5e0',
				greyBg: '#f7fafc',
				primary: '#3182ce',
				primaryLight: '#4299e1',
				success: '#44c662',
				successLight: '#44c662cc',
				error: '#ff0000',
				errorLight: '#ff0000cc',
				warning: '#E6A23C',
				dark: '#2c3e50',
				darkTransparent: '#2c3e5066',
				focused: '#90cdf4',
				focusedLight: '#ebf8ff',
			},
			fontFamily: {
				display: ['Avenir Next Italic'],
				body: ['Avenir Next Heavy'],
				regular: 'Avenir Next Regular',
				italic: 'Avenir Next Italic',
				medium: 'Avenir Next Medium',
				demi: 'Avenir Next Demi',
				bold: 'Avenir Next Bold',
				heavy: 'Avenir Next Heavy',
			},
			fontSize: {
				14: '1.4rem',
			},
			top: {
				100: '100%',
			},
			width: {
				'30r': '30rem',
				72: '18rem',
				80: '20rem',
			},
		},
	},
	variants: {
		backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
		color: ['responsive', 'hover'],
		fontFamily: ['responsive', 'hover'],
		outline: ['responsive', 'focus'],
	},
	plugins: [],
};
