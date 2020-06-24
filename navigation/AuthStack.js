import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "screens/Auth/LoginScreen/LoginScreen"
import RegisterScreen from "screens/Auth/RegisterScreen/RegisterScreen"

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
		<Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
