import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import projectsSlice from './projects/projectsSlice';
import usersSlice from './users/usersSlice';

export const store = configureStore({
	reducer: {
		users: usersSlice,
		projects: projectsSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
