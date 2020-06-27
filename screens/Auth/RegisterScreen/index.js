import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import RegisterForm from "./components/RegisterForm";
import { useTranslation } from "react-i18next";

import * as SC from "./styles";

const LoginScreen = () => {
	const { t } = useTranslation();
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SC.Content>
				<SC.TitleContainer>
					<SC.Title>{t("register")}</SC.Title>
				</SC.TitleContainer>
				<SC.FormContainer>
					<RegisterForm />
				</SC.FormContainer>
			</SC.Content>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
