import { Clear, Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React from 'react';
import { styleQuickSearchToolbar } from './styleQuickSearchToolbar';

interface QuickSearchToolbarProps {
	clearSearch: () => void;
	onChange: () => void;
	value: string;
}

export function QuickSearchToolbar({ value, clearSearch, onChange }: QuickSearchToolbarProps): JSX.Element {
	const classes = styleQuickSearchToolbar();

	return (
		<div className={classes.root}>
			<TextField
				variant="outlined"
				size="small"
				value={value}
				onChange={onChange}
				placeholder="Search…"
				className={classes.textField}
				InputProps={{
					startAdornment: <Search fontSize="small" />,
					endAdornment: (
						<IconButton
							title="Clear"
							aria-label="Clear"
							size="small"
							style={{ visibility: value ? 'visible' : 'hidden' }}
							onClick={clearSearch}
						>
							<Clear fontSize="small" />
						</IconButton>
					),
				}}
			/>
		</div>
	);
}
