import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, } from "react-native";
import { Text, Title } from "ui/Texts";
import styled from "styled-components";
import DreamFooter from "components/DreamFooter";
import CommentInput from "./CommentInput";

const DreamHeader = props => {
	const { dream, theme } = props;
	return (
		<ScrollView
			style={{
				width: "100%",
				backgroundColor: theme.background
			}}
		>
			<DreamContainer>
				<View>
					<Title>{dream.title}</Title>
				</View>
				<View style={{ marginVertical: 30 }}>
					<Text selectionColor={theme.surface} style={{ fontSize: 15 }}>
						{dream.body}
					</Text>
				</View>
				<DreamFooter
					user={dream.authorUsername}
					comments={props.comments ? props.comments.length : 0}
					date={dream.date}
				/>
			</DreamContainer>
			<CommentsContainer>
				<CommentInput onComment={props.onComment} dreamId={dream.id} />
			</CommentsContainer>
		</ScrollView>
	);
};

const DreamContainer = styled.View`
	padding: 20px;
`;
const CommentsContainer = styled.View`
	padding: 20px;
	border-bottom-width: 1px;
	border-bottom-color: ${props => props.theme.surface};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export default DreamHeader;
