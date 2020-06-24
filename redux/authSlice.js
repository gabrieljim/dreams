import { AsyncStorage } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import { SERVER_URL } from "react-native-dotenv";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLogged: false,
		user: {}
	},
	reducers: {
		authenticate: (state, action) => {
			state.isLogged = true;
			state.user = action.payload.user;
		},
		terminateSession: state => {
			state.isLogged = false;
			state.user = {};
		}
	}
});

export const { authenticate } = authSlice.actions;

const storeToken = data => {
	return async dispatch => {
		await AsyncStorage.setItem("token", data.token);
		await AsyncStorage.setItem("user", JSON.stringify(data.user));
		dispatch(authenticate(data));
	};
};

export const register = values => {
	return async dispatch => {
	console.log(SERVER_URL);
		const response = await fetch(SERVER_URL + "/users/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values)
		});
		const data = await response.json();
		if (data.error) {
			return data.error;
		}
		dispatch(storeToken(data));
	};
};

export const login = values => {
	return async dispatch => {
		const response = await fetch(SERVER_URL + "/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values)
		});
		const data = await response.json();
		if (data.error) {
			return data.error;
		} else {
			dispatch(storeToken(data));
		}
	};
};

export const logout = () => {
	return async dispatch => {
		await AsyncStorage.removeItem("token");
		await AsyncStorage.removeItem("user");
		dispatch(authSlice.actions.terminateSession());
	};
};

export default authSlice.reducer;
