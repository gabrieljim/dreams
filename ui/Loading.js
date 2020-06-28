import React from "react";
import { withTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

const Loading = props => {
	return (
		<ActivityIndicator
			size={props.small ? "small" : "large"}
			color={props.contrat}
		/>
	);
};

export default withTheme(Loading);
