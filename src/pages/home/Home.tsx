import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GridRenderCellParams } from '@mui/x-data-grid';
import ActionButtons, { Actions } from 'pages/home/ActionButtons/ActionButtons';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addProject, editProject, Project, projectsSelector } from 'store/projects/projectsSlice';
import { addUser, usersSelector } from 'store/users/usersSlice';
import FormModal from '../../components/FormModal/FormModal';
import { ProjectForm, ProjectFormValues } from './forms/ProjectForm';
import { UserForm, UserFormValues } from './forms/UserForm';
import ProjectsTable from './ProjectsTable/ProjectsTable';

const useStyles = makeStyles({
	boxTable: {
		height: '70vh',
	},
});

export function Home(): JSX.Element {
	const classes = useStyles();
	const dispatch = useAppDispatch();

	const { users } = useAppSelector(usersSelector);
	const { projects } = useAppSelector(projectsSelector);

	const [openModal, setOpenModal] = React.useState(false);
	const [formValues, setFormValues] = React.useState<Project | null>(null);
	const [action, setAction] = React.useState<Actions | null>(null);

	const handleOpen = (): void => setOpenModal(true);
	const handleClose = (): void => setOpenModal(false);

	const onProjectEdit = (params: GridRenderCellParams<Project>): void => {
		setAction(Actions.EDIT_PROJECT);
		setFormValues(params.row);
		handleOpen();
	};
	const onAction = (type: Actions): void => {
		setAction(type);
		handleOpen();
	};

	const createUser = (values: UserFormValues): void => {
		const generatedId = users.length + 1;
		dispatch(addUser({ id: generatedId, ...values }));
	};

	const createProject = (values: ProjectFormValues): void => {
		const generatedId = projects.length + 1;
		const projectOwner = users.find((user) => user.id === Number(values.owner));
		if (projectOwner) {
			dispatch(addProject({ ...values, id: generatedId, owner: projectOwner }));
		} else {
			console.error('Error with project owner field');
		}
	};

	const modifyProject = (values: Project): void => {
		const editedProjectValues = {
			...values,
			id: formValues?.id,
		} as Project;
		const projectOwner = users.find((user) => user.id === Number(editedProjectValues.owner));
		if (projectOwner) {
			dispatch(editProject({ ...editedProjectValues, owner: projectOwner }));
		} else {
			console.error('Error with project owner field');
		}
	};

	const onFormSubmit = (values: UserFormValues | ProjectFormValues | Project): void => {
		switch (action) {
			case Actions.CREATE_USER:
				createUser(values as UserFormValues);
				break;
			case Actions.CREATE_PROJECT:
				createProject(values as ProjectFormValues);
				break;
			case Actions.EDIT_PROJECT:
				modifyProject(values as Project);
				break;
			default:
		}
		handleClose();
	};

	const actionForm = (): JSX.Element | null => {
		switch (action) {
			case Actions.CREATE_USER:
				return <UserForm action={action} onSubmit={onFormSubmit} />;
			case Actions.CREATE_PROJECT:
				return <ProjectForm defaultValues={null} action={action} onSubmit={onFormSubmit} />;
			case Actions.EDIT_PROJECT:
				return <ProjectForm defaultValues={formValues} action={action} onSubmit={onFormSubmit} />;
			default:
				return null;
		}
	};

	return (
		<>
			<FormModal open={openModal} handleClose={handleClose}>
				{actionForm()}
			</FormModal>
			<ActionButtons onAction={onAction} />
			<Box className={classes.boxTable}>
				<ProjectsTable onRowEdit={onProjectEdit} />
			</Box>
		</>
	);
}
