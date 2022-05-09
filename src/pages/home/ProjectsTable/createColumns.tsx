import { Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import { GridColDef, GridRenderCellParams, GridValueFormatterParams } from '@mui/x-data-grid';
import React from 'react';
import { User } from 'store/users/usersSlice';

type Args = {
	onRowEdit: (params: GridRenderCellParams) => void;
};

export const createColumns = ({ onRowEdit }: Args): GridColDef[] => {
	return [
		{ field: 'id', hide: true, filterable: false },
		{ field: 'name', headerName: 'Name', flex: 2, minWidth: 100 },
		{ field: 'description', headerName: 'Description', flex: 2, minWidth: 100 },
		{
			field: 'owner',
			headerName: 'Owner',
			flex: 2,
			minWidth: 100,
			valueFormatter: (params: GridValueFormatterParams<User>) => params.value.name,
		},
		{
			field: 'edit',
			flex: 1,
			align: 'center',
			headerName: '',
			minWidth: 100,
			filterable: false,
			renderCell: (params) => {
				return (
					<Button size="small" onClick={() => onRowEdit(params)} variant="text">
						<Edit />
					</Button>
				);
			},
		},
	];
};
