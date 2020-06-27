import React, { useState } from "react";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useTranslation } from "react-i18next";

import Main from "ui/Main";
import * as SC from "./styles";

import Recorder from "components/Recorder";
import NewDreamForm from "./components/NewDreamForm";

const NewDreamScreen = () => {
	const [recorder, setRecorder] = useState(false);
	const { t } = useTranslation();

	if (recorder) {
		return (
			<Main>
				<Recorder />
			</Main>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Main flexStart>
				<SC.TitleContainer>
					<SC.Title>{t("newDreamScreenTitle")}</SC.Title>
				</SC.TitleContainer>
				<SC.FormContainer>
					<NewDreamForm />
				</SC.FormContainer>
			</Main>
		</TouchableWithoutFeedback>
	);
};

export default NewDreamScreen;
