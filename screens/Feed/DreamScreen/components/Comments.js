import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { Text } from "ui/Texts";
import Comment from "./Comment";

const Comments = props => {
	const { theme, comments } = props;

	return (
		<FlatList
			style={{ width: "100%" }}
			data={comments}
			ListEmptyComponent={
				!comments ? (
					<ActivityIndicator size="large" color={theme.contrast} />
				) : (
					<Text>No comments found...</Text>
				)
			}
			ListHeaderComponent={<props.DreamHeader />}
			showsVerticalScrollIndicator={false}
			keyExtractor={item => item._id}
			renderItem={({ item }) => <Comment comment={item} />}
		/>
	);
};

export default Comments;
