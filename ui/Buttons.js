import React from "react";
import { View, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

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
