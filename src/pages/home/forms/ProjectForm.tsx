import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import { Actions } from 'pages/home/ActionButtons/ActionButtons';
import React from 'react';
import { useAppSelector } from 'store/hooks';
import { Project } from 'store/projects/projectsSlice';
import { usersSelector } from 'store/users/usersSlice';
import * as Yup from 'yup';

export type ProjectFormValues = {
	name: string;
	description: string;
	owner: number | string;
};
type ProjectFormProps = {
	action: Actions;
	defaultValues: Project | null;
	onSubmit: (values: ProjectFormValues) => void;
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

export const ProjectForm = ({ action, defaultValues, onSubmit }: ProjectFormProps): JSX.Element => {
	const classes = useStyles();

	const { users } = useAppSelector(usersSelector);
	const formik = useFormik({
		initialValues: {
			name: defaultValues?.name || '',
			description: defaultValues?.description || '',
			owner: defaultValues?.owner.id || '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('required'),
			description: Yup.string().required('required'),
			owner: Yup.number().required('required'),
		}),
		onSubmit: (values) => {
			onSubmit(values);
		},
	});

	const { handleChange, handleSubmit, values } = formik;
	return (
		<Box className={classes.form} component="form" onSubmit={handleSubmit}>
			<Typography variant="h6">{action === Actions.CREATE_PROJECT ? 'Create' : 'Edit'} project</Typography>
			<TextField
				fullWidth
				size="small"
				onChange={handleChange}
				value={values.name}
				variant="outlined"
				name="name"
				label="Name"
			/>
			<TextField
				fullWidth
				size="small"
				onChange={handleChange}
				value={values.description}
				variant="outlined"
				name="description"
				label="Description"
				multiline
				rows={3}
			/>
			<TextField size="small" select fullWidth value={values.owner} label="Owner" name="owner" onChange={handleChange}>
				{(users &&
					users.map((user) => (
						<MenuItem key={user.id} value={user.id}>
							{user.name}
						</MenuItem>
					))) ||
					null}
			</TextField>
			<Button fullWidth type="submit" variant="contained">
				{action === Actions.CREATE_PROJECT ? 'Create' : 'Save'}
			</Button>
		</Box>
	);
};
