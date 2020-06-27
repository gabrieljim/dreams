import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, HighlightedButton } from "ui/Buttons";
import { ErrorText } from "ui/Texts";
import { Container } from "ui/Containers";
import { FormInput } from "components/FormInputs";
import { register } from "store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  const [serverError, setServerError] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required(t("usernameRequired"))
      .max(20, t("maxUsernameCharacters")),
    email: yup
      .string()
      .required(t("emailRequired"))
      .email(t("emailInvalid")),
    password: yup
      .string()
      .required(t("passwordRequired"))
      .min(8, t("minPasswordCharacters")),
    confirmPassword: yup
      .string()
      .required(t("confirmPassword"))
      .oneOf([yup.ref("password")], t("passwordsNotMatching"))
  });

  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      onSubmit={async (values, actions) => {
        const error = await dispatch(register(values));
        if (error) {
          actions.setSubmitting(false);
          setServerError(error);
        }
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
					<Container style={{ flexGrow: 2, justifyContent: "center" }}>
            <FormInput placeholder={t("usernameField")} name="username" />
            <FormInput
              placeholder={t("emailField")}
              name="email"
              textContentEntry="emailAddress"
              autoCompleteType="email"
              keyboardType="email-address"
            />
            <FormInput
              secureTextEntry={true}
              placeholder={t("passwordField")}
              name="password"
            />
            <FormInput
              secureTextEntry={true}
              placeholder={t("confirmPasswordField")}
              name="confirmPassword"
            />
          </Container>
          <Container style={{ justifyContent: "flex-start", flexGrow: 1 }}>
            {isSubmitting ? (
              <ActivityIndicator color={theme.contrast} size="large" />
            ) : (
              <>
                {serverError && <ErrorText>{t(serverError)}</ErrorText>}
                <HighlightedButton
                  title={t("register")}
                  pressHandler={handleSubmit}
                />
                <Button
                  pressHandler={() => navigation.navigate("Login")}
                  title={t("gotAccount")}
                />
              </>
            )}
          </Container>
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;
