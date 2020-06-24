import React, { useState } from "react";
import { CommentTextArea } from "ui/Inputs";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { postComment } from "services/dream";
import { ActivityIndicator } from "react-native";

const CommentInput = props => {
	const [comment, setComment] = useState("");
	const [isPosting, setIsPosting] = useState(false);
	const theme = useSelector(state => state.theme);
	const user = useSelector(state => state.auth.user);

	const sendComment = async () => {
		setIsPosting(true);
		await postComment(comment, props.dreamId, user.username);
		await props.onComment(props.dreamId);
	};

	return (
		<>
			<CommentTextArea
				value={comment}
				onChangeText={text => setComment(text)}
				placeholder="Add a comment..."
				placeholderTextColor={theme.surface}
			/>
			{comment ? (
				isPosting ? (
					<ActivityIndicator color={theme.contrast} size="large" />
				) : (
					<TouchableNativeFeedback onPress={sendComment}>
						<MaterialCommunityIcons
							name="send"
							color={theme.onSurface}
							size={25}
						/>
					</TouchableNativeFeedback>
				)
			) : null}
		</>
	);
};

export default CommentInput;
