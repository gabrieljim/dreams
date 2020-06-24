import React from "react";
import { View } from "react-native";
import { Text, Title } from "ui/Texts";
import { useSelector } from "react-redux";
import timeSince from "utils/timeSince";

const Comment = props => {
	const theme = useSelector(state => state.theme);
	const { comment } = props;
	return (
		<View
			style={{
				backgroundColor: theme.surface,
				justifyContent: "center",
				borderBottomWidth: 2,
				borderBottomColor: theme.background,
				padding: 10
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<Title>{comment.author}</Title>
				<Text style={{ fontSize: 12 }}>{timeSince(comment.date)}</Text>
			</View>
			<View style={{ marginTop: 20, marginBottom: 10 }}>
				<Text style={{ fontSize: 15 }}>{comment.body}</Text>
			</View>
		</View>
	);
};

export default Comment;
