import React from "react";
import { Text, Title } from "ui/Texts";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DreamFooter from "components/DreamFooter";

const Dream = props => {
  const theme = useSelector(state => state.theme);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: theme.surface,
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: theme.background
      }}
    >
     <TouchableNativeFeedback
        style={{
          padding: 10
        }}
        onPress={() => navigation.navigate("Dream", { dream: props })}
      >
        <View>
          <Title>{props.title}</Title>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Text numberOfLines={4} style={{ fontSize: 15 }}>
            {props.body}
          </Text>
        </View>
        <DreamFooter
          user={props.authorUsername}
          comments={props.comments.length}
          date={props.date}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

export default Dream;
