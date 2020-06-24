import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import NewDreamScreen from "screens/NewDream/NewDreamScreen";
import MyProfileScreen from "screens/MyProfile/MyProfileScreen";
import FeedStack from "navigation/FeedStack";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
  const theme = useSelector(state => state.theme);
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      activeColor={theme.onSurface}
      inactiveColor={theme.background}
      barStyle={{ backgroundColor: theme.surface }}
      initialRouteName="NewDream"
      sceneAnimationEnabled={false}
      shifting={true}
    >
      <Tab.Screen
        name="FeedStack"
        component={FeedStack}
        options={{
          tabBarLabel: t("feed"),
          tabBarIcon: tabInfo => (
            <FontAwesome name="feed" size={24} color={tabInfo.color} />
          )
        }}
      />
      <Tab.Screen
        name="NewDream"
        component={NewDreamScreen}
        options={{
          tabBarLabel: t("dream"),
          tabBarIcon: tabInfo => (
            <FontAwesome name="bed" size={24} color={tabInfo.color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileScreen}
        options={{
					tabBarLabel: t("profile"),
          tabBarIcon: tabInfo => (
            <FontAwesome name="user" size={24} color={tabInfo.color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
