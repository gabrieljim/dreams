import { createSlice } from "@reduxjs/toolkit";

const globalState = createSlice({
	name: "global",
	initialState: {
		shouldRefreshFeed: false
	},
	reducers: {
		refreshFeed: (state, action) => {
			state.shouldRefreshFeed = action.payload;
		}
	}
});

export const { refreshFeed } = globalState.actions;

export default globalState.reducer;
