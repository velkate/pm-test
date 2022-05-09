import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	table: {
		'&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
			outline: 'none',
		},
		'&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
			outline: 'none',
		},
	},
});
