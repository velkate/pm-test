import { ThemeOptions } from '@mui/material/styles/createTheme';

export const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#4c6ebc',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			},
		},
	},
};
