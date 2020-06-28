import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "ui/Texts";
import Loading from "ui/Loading";
import { refreshFeed } from "store/globalState";
import * as dream from "services/dream";

import Dream from "components/Dream";

const DreamList = props => {
	const [dreams, setDreams] = useState(false);
	const [page, setPage] = useState(0);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [endReached, setEndReached] = useState(false);

	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user.id);

	const shouldRefreshFeed = useSelector(
		state => state.global.shouldRefreshFeed
	);

	const { userDreamsOnly } = props;

	// When a new dream is created, the NewDreamForm dispatches an action that updates the global state checked here

	useEffect(() => {
		if (shouldRefreshFeed) {
			setIsRefreshing(true);
			fetchDreams();
			dispatch(refreshFeed(false));
		}
	}, [shouldRefreshFeed]);

	useEffect(
		React.useCallback(() => {
			fetchDreams();
		}, [page]),
		[page]
	);

	// fetchDreams is called everytime the page is updated

	const fetchDreams = async () => {
		const fetchingDreamsFunction = userDreamsOnly
			? dream.fetchUserDreams.bind(this, user)
			: dream.fetchDreams;

		const dreamList = await fetchingDreamsFunction(page);

		if (page === 0) {
			setDreams(dreamList);
		} else {
			if (dreamList.length > 0) {
				setDreams(prevDreams => [...prevDreams, ...dreamList]);
			}
		}

		setEndReached(false);
		setIsRefreshing(false);
	};

	const refreshDreams = async () => {
		setIsRefreshing(true);
		if (page === 0) {
			fetchDreams();
		} else {
			setPage(0);
		}
	};

	const endReachedHandler = async () => {
		if (!isRefreshing) {
			setPage(currentPage => currentPage + 1);
			setEndReached(true);
		}
	};

	if (!dreams) {
		return <Loading />;
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
				<Loading />
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
					likes={item.likes}
				/>
			)}
		/>
	);
};

export default DreamList;
