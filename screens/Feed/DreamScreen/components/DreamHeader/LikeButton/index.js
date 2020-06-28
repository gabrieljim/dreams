import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { withTheme } from "styled-components";

import { likeDream } from "services/dream";

import * as SC from "./styles";

const LikeButton = props => {
	const [isFetching, setIsFetching] = useState(false);

	const { isLiked, setIsLiked, theme, dream } = props;

	const like = async () => {
		setIsFetching(true);
		if (isLiked) {
			await likeDream(dream, true);
			setIsLiked(false);
		} else {
			await likeDream(dream);
			setIsLiked(true);
		}
		setIsFetching(false);
	};


	if (isFetching) {
		return (
			<SC.LoadingContainer>
				<ActivityIndicator color={theme.contrast} size="small" />
			</SC.LoadingContainer>
		);
	}

	return (
		<SC.TouchableContainer onPress={like}>
			{isLiked ? (
				<FontAwesome color={theme.error} size={20} name="heart" />
			) : (
				<FontAwesome color={theme.error} size={20} name="heart-o" />
			)}
		</SC.TouchableContainer>
	);
};

export default withTheme(
	React.memo(
		LikeButton,
		(prevProps, nextProps) => prevProps.isLiked === nextProps.isLiked
	)
);
