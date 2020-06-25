import React from "react";
import { View } from "react-native";
import { FooterText } from "ui/Texts";
import { FontAwesome } from "@expo/vector-icons";
import timeSince from "utils/timeSince";

const DreamFooter = props => {
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<View>
				<FooterText>{props.user}</FooterText>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<FooterText style={{ marginRight: 10 }}>
					<FontAwesome name="comments" /> {props.comments}
				</FooterText>
				<FooterText>{timeSince(props.date)}</FooterText>
			</View>
		</View>
	);
};

export default DreamFooter;
