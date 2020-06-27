import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "ui/Texts";

import * as SC from "./styles";

import DreamFooter from "components/DreamFooter";

const Dream = props => {
	const navigation = useNavigation();
	return (
		<SC.Content>
			<SC.TouchableDreamContainer
				onPress={() => navigation.navigate("Dream", { dream: props })}
			>
					<View>
						<Title>{props.title}</Title>
					</View>
					<SC.DreamBodyContainer>
						<SC.DreamBody numberOfLines={4}>{props.body}</SC.DreamBody>
					</SC.DreamBodyContainer>
					<DreamFooter
						user={props.authorUsername}
						comments={props.comments.length}
						date={props.date}
					/>
			</SC.TouchableDreamContainer>
		</SC.Content>
	);
};

export default Dream;
