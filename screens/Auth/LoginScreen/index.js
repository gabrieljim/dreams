import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useTranslation } from "react-i18next";

import { Container } from "ui/Containers";
import * as SC from "./styles";

import LoginForm from "./components/LoginForm";

const LoginScreen = () => {
	const { t } = useTranslation();
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SC.Content>
				<SC.TitleContainer>
					<SC.Title>{t("login")}</SC.Title>
				</SC.TitleContainer>
				<SC.FormContainer>
					<LoginForm />
				</SC.FormContainer>
			</SC.Content>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
