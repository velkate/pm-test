import { makeStyles } from '@mui/styles';

export const stylesApp = makeStyles({
	root: {
		background: 'linear-gradient(180deg, #7aa2ff, skyblue)',
		height: '100%',
		padding: '0 1rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '1rem',
	},
	paperMain: {
		'&.MuiPaper-root': {
			height: '90vh',
			borderRadius: '15px',
		},
	},
});
