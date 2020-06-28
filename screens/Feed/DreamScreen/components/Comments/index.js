import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";
import { FlatList, ActivityIndicator } from "react-native";
import { Text } from "ui/Texts";
import Comment from "../Comment";

import * as SC from "./styles";

const Comments = props => {
	const { theme, comments } = props;

	return (
		<FlatList
			style={{ width: "100%" }}
			data={comments}
			ListEmptyComponent={
				!comments ? (
					<Loading />
				) : (
					<SC.NoComments>
						<Text>No comments found...</Text>
					</SC.NoComments>
				)
			}
			ListHeaderComponent={<props.DreamHeader />}
			showsVerticalScrollIndicator={false}
			keyExtractor={item => item._id}
			renderItem={({ item }) => <Comment comment={item} />}
		/>
	);
};

const Loading = withTheme(props => (
	<ActivityIndicator size="large" color={props.theme.contrast} />
));

export default React.memo(
	Comments,
	(prevProps, nextProps) => prevProps.comments === nextProps.comments
);
