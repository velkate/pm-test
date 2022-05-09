import { BusinessCenter, PersonAdd } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useStyles } from './stylesActionButtons';

export enum Actions {
	CREATE_USER = 'CREATE_USER',
	CREATE_PROJECT = 'CREATE_PROJECT',
	EDIT_USER = 'EDIT_USER',
	EDIT_PROJECT = 'EDIT_PROJECT',
}

type ActionButtonsProps = {
	onAction: (action: Actions) => void;
};
const ActionButtons = ({ onAction }: ActionButtonsProps): JSX.Element => {
	const classes = useStyles();
	return (
		<Grid gap="1rem" className={classes.buttonsGrid} container>
			<Grid xs={12} sm="auto" component={Box} item>
				<Button
					onClick={() => onAction(Actions.CREATE_USER)}
					size="small"
					fullWidth
					variant="outlined"
					startIcon={<PersonAdd />}
				>
					Create user
				</Button>
			</Grid>
			<Grid xs={12} sm="auto" component={Box} item>
				<Button
					onClick={() => onAction(Actions.CREATE_PROJECT)}
					size="small"
					fullWidth
					variant="outlined"
					startIcon={<BusinessCenter />}
				>
					Create project
				</Button>
			</Grid>
		</Grid>
	);
};

export default ActionButtons;
