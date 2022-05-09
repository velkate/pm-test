import { Project } from './projectsSlice';

export const initialStateProjects: Project[] = [
	{
		id: 1,
		name: "Leanne Graham's project",
		description: "Leanne Graham's project",
		owner: {
			id: 1,
			name: 'Leanne Graham',
			email: 'Sincere@april.biz',
		},
	},
	{
		id: 2,
		name: "Ervin Howell's project",
		description: "Ervin Howell's project",
		owner: {
			id: 2,
			name: 'Ervin Howell',
			email: 'Shanna@melissa.tv',
		},
	},
	{
		id: 3,
		name: "Clementine Bauch 's project",
		description: "Clementine Bauch 's project",
		owner: { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
	},
	{
		id: 4,
		name: "Patricia Lebsack's project",
		description: "Patricia Lebsack's project",
		owner: {
			id: 4,
			name: 'Patricia Lebsack',
			email: 'Julianne.OConner@kory.org',
		},
	},
];
