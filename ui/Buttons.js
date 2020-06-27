import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
	TouchableNativeFeedback,
	TouchableWithoutFeedback
} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { likeDream } from "services/dream";

export const Button = props => {
	const theme = useSelector(state => state.theme);
	return (
		<View
			style={{
				width: "100%"
			}}
		>
			<TouchableNativeFeedback
				style={{
					backgroundColor: theme.background,
					borderColor: theme.onSurface,
					borderWidth: 1,
					borderRadius: 5,
					padding: 10,
					...props,
					alignItems: "center"
				}}
				onPress={props.pressHandler}
			>
				<Text
					style={{
						color: theme.onSurface
					}}
				>
					{props.title}
				</Text>
			</TouchableNativeFeedback>
		</View>
	);
};

export const HighlightedButton = props => {
	const theme = useSelector(state => state.theme);
	return (
		<View
			style={{
				width: "100%",
				margin: 10
			}}
		>
			<TouchableNativeFeedback
				style={{
					backgroundColor: theme.onSurface,
					borderColor: theme.onSurface,
					borderWidth: 1,
					borderRadius: 5,
					padding: 10,
					alignItems: "center"
				}}
				onPress={props.pressHandler}
			>
				<Text
					style={{
						color: theme.background
					}}
				>
					{props.title}
				</Text>
			</TouchableNativeFeedback>
		</View>
	);
};

export const LikeButton = props => {
	const [isLiked, setIsLiked] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const theme = useSelector(state => state.theme);

	const { dream } = props;

	useEffect(() => {
		//TODO
	}, [])


	const getLikeStatus = () =>{
	// TODO	
	}

	const like = async () => {
		setIsFetching(true);
		if (isLiked) {
			return;
		} else {
			await likeDream(dream);
			setIsLiked(true);
		}
		setIsFetching(false);
	};

	if (isFetching) {
		return <ActivityIndicator color={theme.contrast} size="small" />;
	}

	return (
		<TouchableWithoutFeedback style={{marginRight: 10}} onPress={like}>
			{isLiked ? (
				<FontAwesome color={theme.error} size={20} name="heart" />
			) : (
				<FontAwesome color={theme.error} size={20} name="heart-o" />
			)}
		</TouchableWithoutFeedback>
	);
};
