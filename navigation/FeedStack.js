import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "screens/Feed/FeedScreen";
import DreamScreen from "screens/Feed/DreamScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen
				name="Feed"
				initialParams={{ refresh: true }}
				component={FeedScreen}
			/>
			<Stack.Screen name="Dream" component={DreamScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
