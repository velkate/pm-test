import { Fade } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useStyles } from './styleFormModal';

type FormModalProps = {
	children: JSX.Element | null;
	open: boolean;
	handleClose: () => void;
};

export default function FormModal({ open, handleClose, children }: FormModalProps): JSX.Element {
	const classes = useStyles();
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box className={classes.modalBox}>{children}</Box>
				</Fade>
			</Modal>
		</div>
	);
}
