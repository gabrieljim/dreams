import React from "react";
import { ActivityIndicator } from "react-native";
import { HightlightedButton } from "ui/Buttons";
import { Container } from "ui/Containers";
import { FormInput, FormTextArea } from "components/FormInputs";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import * as dream from "services/dream";
import { useTranslation } from "react-i18next";

const NewDreamForm = () => {
	const theme = useSelector(state => state.theme);
	const navigation = useNavigation();

	const { t } = useTranslation();

	const submitDream = async values => {
		await dream.createDream({ ...values });
		navigation.navigate("FeedStack", {
			screen: "Feed",
			params: { refresh: true }
		});
	};

	const validationSchema = yup.object().shape({
		title: yup
			.string()
			.required(t("titleRequired"))
			.max(35, t("titleMaxCharacters")),
		body: yup.string().required(t("bodyRequired"))
	});

	return (
		<Formik
			initialValues={{
				title: "",
				body: ""
			}}
			onSubmit={values => submitDream(values)}
			validationSchema={validationSchema}
		>
			{({ handleSubmit, isSubmitting }) => (
				<>
					<Container style={{ flexGrow: 2, marginBottom: 20 }}>
						<FormInput
							autoCapitalize="words"
							placeholder={t("dreamTitle")}
							name="title"
						/>
						<FormTextArea
							style={{ height: "80%" }}
							placeholder={t("tellMeMore")}
							name="body"
						/>
					</Container>
					<Container style={{ justifyContent: "flex-start", flexGrow: 1 }}>
						{isSubmitting ? (
							<ActivityIndicator size="large" color={theme.contrast} />
						) : (
							<HightlightedButton
								pressHandler={handleSubmit}
								title={t("postDream")}
							/>
						)}
					</Container>
				</>
			)}
		</Formik>
	);
};

export default NewDreamForm;
