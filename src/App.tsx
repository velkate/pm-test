import { Box, Container, Paper } from '@mui/material';
import { Home } from 'pages/home/Home';
import React from 'react';
import { stylesApp } from 'stylesApp';

function App(): JSX.Element {
	const classes = stylesApp();

	return (
		<Box className={classes.root}>
			<Container maxWidth="md" component={Paper} className={classes.paperMain}>
				<Home />
			</Container>
		</Box>
	);
}

export default App;
