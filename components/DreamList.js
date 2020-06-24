import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Text } from "ui/Texts";
import { ActivityIndicator } from "react-native-paper";
import * as dream from "services/dream";
import Dream from "components/Dream";

const DreamList = props => {
	const [dreams, setDreams] = useState(false);
	const [page, setPage] = useState(0);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [endReached, setEndReached] = useState(false);
	const theme = useSelector(state => state.theme);
	const user = useSelector(state => state.auth.user.id);

	const { userDreamsOnly } = props;

	useEffect(
		React.useCallback(() => {
			fetchDreams();
		}, [page]),
		[page]
	);

	const refreshDreams = async () => {
		setIsRefreshing(true);
		setPage(0);
	};

	const fetchDreams = async () => {
		const fetchingDreamsFunction = userDreamsOnly
			? dream.fetchUserDreams.bind(this, user)
			: dream.fetchDreams;

		if (page === 0) {
			const dreamList = await fetchingDreamsFunction(0);
			setDreams(dreamList);
		} else {
			const dreamList = await fetchingDreamsFunction(page);
			if (dreamList.length > 0) {
				setDreams(prevDreams => [...prevDreams, ...dreamList]);
			}
		}
		setEndReached(false);
		setIsRefreshing(false);
	};

	const endReachedHandler = async () => {
		if (!isRefreshing) {
			setPage(currentPage => currentPage + 1);
			setEndReached(true);
		}
	};

	if (!dreams) {
		return <ActivityIndicator size="large" color={theme.contrast} />;
	}

	return (
		<FlatList
			style={{ width: "100%" }}
			data={dreams}
			onRefresh={refreshDreams}
			refreshing={isRefreshing}
			overScrollMode="never"
			onEndReached={endReachedHandler}
			onEndReachedThreshold={0.1}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={<Text>No dreams found...</Text>}
			ListFooterComponent={() => (
				<ActivityIndicator size="large" color={theme.contrast} />
			)}
			ListFooterComponentStyle={{ opacity: endReached ? 1 : 0 }}
			keyExtractor={item => item._id}
			renderItem={({ item }) => (
				<Dream
					id={item._id}
					title={item.title}
					body={item.body}
					author={item.author}
					authorUsername={item.authorUsername}
					date={item.date}
					comments={item.comments}
				/>
			)}
		/>
	);
};

export default DreamList;
