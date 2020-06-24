import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Container } from "ui/Containers";
import { Text } from "ui/Texts";
import Main from "ui/Main";
import LoginForm from "./components/LoginForm";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
  const { t } = useTranslation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Main style={{ justifyContent: "space-evenly" }}>
        <Container>
          <Text style={{ fontSize: 40, margin: 20 }}>{t("login")}</Text>
        </Container>
        <Container
          style={{ justifyContent: "flex-start", paddingHorizontal: 60 }}
        >
          <LoginForm />
        </Container>
      </Main>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
