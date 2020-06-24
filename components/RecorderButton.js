import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "ui/Texts";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const RecorderButton = props => {
	function msToTime(s) {
		function pad(n, z) {
			z = z || 2;
			return ("00" + n).slice(-z);
		}

		const ms = s % 1000;
		s = (s - ms) / 1000;
		const secs = s % 60;
		s = (s - secs) / 60;
		const mins = s % 60;

		return pad(mins) + ":" + pad(secs);
	}
	const theme = useSelector(state => state.theme);
	return (
		<View
			style={{
				borderRadius: 100,
				backgroundColor: theme.onSurface,
				height: 200,
				width: 200,
				overflow: "hidden"
			}}
		>
			<TouchableNativeFeedback
				style={{
					height: "100%",
					justifyContent: "center",
					alignItems: "center"
				}}
				onPress={props.isRecording ? props.stop : props.recordAudio}
			>
				{props.isRecording ? (
					<Text style={{ color: theme.background, fontSize: 40 }}>
						{msToTime(props.duration)}
					</Text>
				) : (
					<FontAwesome name="microphone" size={80} color={theme.background} />
				)}
			</TouchableNativeFeedback>
		</View>
	);
};

export default RecorderButton;
/*
			<Button
				title={props.isRecording ? "Stop" : "Record"}
				onPress={props.isRecording ? props.stop : props.recordAudio}
			/>
			*/
