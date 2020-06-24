import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Container } from "ui/Containers";
import { Text } from "ui/Texts";
import Main from "ui/Main";
import RegisterForm from "./components/RegisterForm";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
  const { t } = useTranslation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Main style={{ justifyContent: "space-evenly" }}>
        <Container style={{ flexGrow: 1, justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 40, margin: 20 }}>{t("register")}</Text>
        </Container>
        <Container
          style={{
            flexGrow: 3,
            justifyContent: "flex-start",
            paddingHorizontal: 60
          }}
        >
          <RegisterForm />
        </Container>
      </Main>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
