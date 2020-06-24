import { SERVER_URL } from "react-native-dotenv";
import { AsyncStorage } from "react-native";


const protectedFetch = async (url, options) => {
	const token = await AsyncStorage.getItem("token");
	const response = await fetch(url, {
		headers: {
			Authorization: "Bearer " + token,
			"Content-Type": "application/json"
		},
		...options
	});
	const data = await response.json();
	if (data.error) {
		return data.error;
	}
	return data;
};

export const fetchDreams = async page => {
	const response = await protectedFetch(SERVER_URL + "/dreams?page=" + page, {
		method: "GET"
	});
	return response.dreams;
};

export const fetchUserDreams = async (user, page) => {
	const response = await protectedFetch(
		SERVER_URL + `/dreams/${user}?page=${page}`,
		{
			method: "GET"
		}
	);
	return response.dreams;
};

export const createDream = async data => {
	const response = await protectedFetch(SERVER_URL + "/dreams/new", {
		method: "POST",
		body: JSON.stringify(data)
	});
	return response;
};

export const fetchComments = async dreamId => {
	const response = await protectedFetch(
		SERVER_URL + `/dreams/${dreamId}/comments`,
		{
			method: "GET"
		}
	);
	return response.comments;
};

export const postComment = async (comment, dreamId, user) => {
	const response = await protectedFetch(SERVER_URL + "/dreams/newComment", {
		method: "POST",
		body: JSON.stringify({ comment, dreamId, user })
	});
	return response;
};

export const uploadAudio = async audio => {
	console.log(audio);
	const response = await protectedFetch(SERVER_URL + "/dreams/test", {
		method: "POST",
		body: JSON.stringify(audio)
	});
	return response;
};
