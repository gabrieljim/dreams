import React, { useEffect } from "react";
import Reactotron from "./ReactotronConfig";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "store/themeSlice";
import authReducer from "store/authSlice";
import globalState from "store/globalState";
import { authenticate } from "store/authSlice";

import MainTab from "navigation/MainTab";
import AuthStack from "navigation/AuthStack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AsyncStorage } from "react-native";
import "./i18n/i18n";

const store = configureStore({
  reducer: {
    theme: themeReducer,
		auth: authReducer,
		global: globalState
  },
  enhancers: [Reactotron.createEnhancer()]
});

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfLogged = async () => {
      let user = await AsyncStorage.getItem("user");
      if (user) {
        const token = await AsyncStorage.getItem("token");
        user = JSON.parse(user);
        dispatch(authenticate({ user, token }));
      }
    };
    checkIfLogged();
  }, []);

  const theme = useSelector(state => state.theme);
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {isLogged ? <MainTab /> : <AuthStack />}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </SafeAreaProvider>
  );
}
