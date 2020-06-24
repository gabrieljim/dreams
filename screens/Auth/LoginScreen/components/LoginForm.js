import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, HightlightedButton } from "ui/Buttons";
import { Container } from "ui/Containers";
import { ErrorText } from "ui/Texts";
import { FormInput } from "components/FormInputs";
import { login } from "store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { ActivityIndicator } from "react-native";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
	const { t } = useTranslation();
	const [serverError, setServerError] = useState(false);
	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme);

	const validationSchema = yup.object().shape({
		name: yup.string().required(t("usernameRequired")),
		password: yup.string().required(t("passwordRequired"))
	});

	const navigation = useNavigation();

	return (
		<Formik
			initialValues={{ name: "", password: "" }}
			onSubmit={async (values, actions) => {
				const error = await dispatch(login(values));
				if (error) {
					actions.setSubmitting(false);
					setServerError(error);
				}
			}}
			validationSchema={validationSchema}
		>
			{({ handleSubmit, isSubmitting }) => (
				<>
					<Container>
						<FormInput placeholder={t("nameField")} name="name" />
						<FormInput
							secureTextEntry={true}
							placeholder={t("passwordField")}
							name="password"
						/>
					</Container>
					<Container style={{ justifyContent: "flex-start" }}>
						{isSubmitting ? (
							<ActivityIndicator color={theme.contrast} size="large" />
						) : (
							<>
								{serverError && <ErrorText>{t(serverError)}</ErrorText>}
								<HightlightedButton
									title={t("login")}
									pressHandler={handleSubmit}
								/>
								<Button
									pressHandler={() => navigation.navigate("Register")}
									title={t("makeAccount")}
								/>
							</>
						)}
					</Container>
				</>
			)}
		</Formik>
	);
};

export default LoginForm;
