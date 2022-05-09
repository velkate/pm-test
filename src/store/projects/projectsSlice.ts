import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { User } from 'store/users/usersSlice';
import { RootState } from '../index';
import { initialStateProjects } from './initialStateProjects';

export type Project = {
	id: number;
	name: string;
	description: string;
	owner: User;
};

type ProjectsState = {
	projects: Project[];
};

const initialState: ProjectsState = {
	projects: initialStateProjects,
};

export const userSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addProject(state, action: { payload: Project }) {
			const newProject = [action.payload, ...state.projects];
			state.projects = newProject;
		},
		editProject(state, action: { payload: Project }) {
			const editedProject = action.payload;
			state.projects = state.projects.map((project) => {
				if (project.id === editedProject.id) {
					return editedProject;
				}
				return project;
			});
		},
	},
});

const projectsState = (state: RootState): ProjectsState => state.projects;

export const projectsSelector = createDraftSafeSelector(projectsState, (state) => state);

export const { addProject, editProject } = userSlice.actions;

export default userSlice.reducer;
