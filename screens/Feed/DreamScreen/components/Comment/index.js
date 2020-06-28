import React from "react";
import timeSince from "utils/timeSince";

import { Title } from "ui/Texts";
import * as SC from "./styles";

const Comment = props => {
	const { comment } = props;
	return (
		<SC.Content>
			<SC.CommentInfo>
				<Title>{comment.author}</Title>
				<SC.TimeSince>{timeSince(comment.date)}</SC.TimeSince>
			</SC.CommentInfo>
			<SC.CommentBodyContainer>
				<SC.CommentBody>{comment.body}</SC.CommentBody>
			</SC.CommentBodyContainer>
		</SC.Content>
	);
};

export default Comment;
