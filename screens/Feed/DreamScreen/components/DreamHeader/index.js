import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";

import { Text, Title } from "ui/Texts";
import LikeButton from "./LikeButton";
import * as SC from "./styles";

import DreamFooter from "components/DreamFooter";
import CommentInput from "../CommentInput";

const DreamHeader = props => {
	const { dream, theme } = props;
	const user = useSelector(state => state.auth.user.id);
	const [isLiked, setIsLiked] = useState(dream.likes.includes(user));

	return (
		<SC.ScrollableContent>
			<SC.DreamContainer>
				<View>
					<Title>{dream.title}</Title>
				</View>
				<SC.DreamBodyContainer>
					<SC.DreamBody selectionColor={theme.surface}>
						{dream.body}
					</SC.DreamBody>
				</SC.DreamBodyContainer>
				<DreamFooter
					user={dream.authorUsername}
					comments={dream.comments ? dream.comments.length : 0}
					date={dream.date}
				/>
				<SC.LikeContainer>
					<LikeButton
						dream={dream._id}
						isLiked={isLiked}
						setIsLiked={setIsLiked}
					/>
					<Text> Liked this dream?</Text>
				</SC.LikeContainer>
			</SC.DreamContainer>
			<SC.CommentsContainer>
				<CommentInput onComment={props.onComment} dreamId={dream.id} />
			</SC.CommentsContainer>
		</SC.ScrollableContent>
	);
};

export default DreamHeader;
