import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	modalBox: {
		position: 'absolute' as const,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'white',
		padding: '1rem',
		borderRadius: 15,
	},
});
