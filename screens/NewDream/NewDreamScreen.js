import React, { useState } from "react";
import { Keyboard } from "react-native";
import Main from "ui/Main";
import { Button } from "ui/Buttons";
import { Text } from "ui/Texts";
import { Container } from "ui/Containers";
import Recorder from "components/Recorder";

import NewDreamForm from "./components/NewDreamForm";

import { TouchableWithoutFeedback } from "react-native";
import { useTranslation } from "react-i18next";

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
			<Main style={{ justifyContent: "flex-start" }}>
				<Container
					style={{ width: "90%", justifyContent: "center", flexBasis: "30%" }}
				>
					<Text style={{ fontSize: 27, marginTop: 50 }}>
						{t("newDreamScreenTitle")}
					</Text>
				</Container>
				<Container
					style={{ width: "90%", justifyContent: "center", flexBasis: "70%" }}
				>
					<NewDreamForm />
				</Container>
			</Main>
		</TouchableWithoutFeedback>
	);
};

export default NewDreamScreen;
