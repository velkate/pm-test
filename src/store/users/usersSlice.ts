import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { initialStateUsers } from './initialStateUsers';

export type User = {
	id: number;
	name: string;
	email: string;
};

type UsersState = {
	users: User[];
};

const initialState: UsersState = {
	users: initialStateUsers,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser(state, action: { payload: User }) {
			const newUsers = [action.payload, ...state.users];
			state.users = newUsers;
		},
	},
});

const usersState = (state: RootState): UsersState => state.users;

export const usersSelector = createDraftSafeSelector(usersState, (state) => state);

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
