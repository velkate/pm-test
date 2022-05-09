import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import { Actions } from 'pages/home/ActionButtons/ActionButtons';
import React from 'react';
import * as Yup from 'yup';

export type UserFormValues = { name: string; email: string };

type UserFormProps = {
	action: Actions;
	onSubmit: (values: UserFormValues) => void;
};

const useStyles = makeStyles({
	form: {
		width: 300,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1rem',
	},
});

export const UserForm = ({ action, onSubmit }: UserFormProps): JSX.Element => {
	const classes = useStyles();
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('required'),
			email: Yup.string().required('required').email('incorrect email'),
		}),
		onSubmit: (values) => {
			onSubmit(values);
		},
	});

	const { handleChange, handleSubmit, errors, values } = formik;
	return (
		<Box className={classes.form} component="form" onSubmit={handleSubmit}>
			<Typography variant="h6">{action === Actions.CREATE_USER ? 'Create' : 'Edit'} user</Typography>
			<TextField
				error={!!errors.name}
				helperText={!!errors.name && errors.name}
				fullWidth
				size="small"
				onChange={handleChange}
				value={values.name}
				variant="outlined"
				name="name"
				label="Name"
			/>
			<TextField
				error={!!errors.email}
				helperText={!!errors.email && errors.email}
				fullWidth
				size="small"
				onChange={handleChange}
				value={values.email}
				variant="outlined"
				name="email"
				label="Email"
			/>
			<Button fullWidth type="submit" variant="contained">
				{action === Actions.CREATE_USER ? 'Create' : 'Save'}
			</Button>
		</Box>
	);
};
