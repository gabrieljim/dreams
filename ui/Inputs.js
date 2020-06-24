import React from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";

const CustomTextInput = props => {
  const theme = useSelector(state => state.theme);
  return <TextInput placeholderTextColor={theme.onSurface}  {...props} />;
};

export const Input = styled(CustomTextInput)`
	backgroundColor: ${props => props.theme.background};
	borderBottomColor: ${props => props.theme.onSurface};
	borderBottomWidth: 1px;
	fontSize: 20px;
	padding: 10px;
	margin: 13px;
	width: 100%;
	color: ${props => props.theme.text};
`;

const CustomTextArea = props => {
	const theme = useSelector(state => state.theme);
  return <TextInput {...props} textAlignVertical="top" multiline={true} placeholderTextColor={theme.background} />;
}

export const TextArea = styled(CustomTextArea)`
	backgroundColor: ${props => props.theme.surface};
	borderRadius: 5px;
	fontSize: 17px;
	padding: 10px;
	width: 100%;
	color: ${props => props.theme.text};
`;

const CommentsCustomTextArea = props => {
	const theme = useSelector(state => state.theme);
  return <TextInput {...props} textAlignVertical="center" multiline={true} placeholderTextColor={theme.surface} />;
}

export const CommentTextArea = styled(CommentsCustomTextArea)`
	backgroundColor: ${props => props.theme.background};
	width: 90%;
	height: 100%;
	font-size: 16px;
	line-height: 22px;
	color: ${props => props.theme.text};
`
