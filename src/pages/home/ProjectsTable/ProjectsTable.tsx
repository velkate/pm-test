import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import * as React from 'react';
import { useAppSelector } from 'store/hooks';
import { Project, projectsSelector } from 'store/projects/projectsSlice';
import { QuickSearchToolbar } from '../QuickSearchToolbar/QuickSearchToolbar';
import { createColumns } from './createColumns';
import { useStyles } from './styleProjectsTable';

export type ProjectsTableProps = {
	onRowEdit: (params: GridRenderCellParams) => void;
};

function escapeRegExp(value: string): string {
	return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export default function ProjectsTable({ onRowEdit }: ProjectsTableProps): JSX.Element {
	const { projects } = useAppSelector(projectsSelector);
	const [searchText, setSearchText] = React.useState<string>('');
	const [filteredProjects, setFilteredProjects] = React.useState<Project[]>([]);

	const classes = useStyles();

	const searchProjects = React.useCallback(
		(searchValue: string): void => {
			setSearchText(searchValue);
			const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
			const filteredRows = projects.filter((row) => {
				const searchInDescription = searchRegex.test(row.description.toString());
				const searchInName = searchRegex.test(row.name.toString());
				return searchInDescription || searchInName;
			});
			setFilteredProjects(filteredRows);
		},
		[projects],
	);

	const columns = createColumns({
		onRowEdit,
	});

	React.useEffect(() => {
		setFilteredProjects([]);
		searchProjects(searchText);
	}, [searchText, searchProjects]);

	return (
		<DataGrid
			components={{ Toolbar: QuickSearchToolbar }}
			disableSelectionOnClick
			checkboxSelection={false}
			className={classes.table}
			rows={filteredProjects}
			columns={columns}
			autoPageSize
			componentsProps={{
				toolbar: {
					value: searchText,
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => searchProjects(event.target.value),
					clearSearch: () => searchProjects(''),
				},
			}}
		/>
	);
}
