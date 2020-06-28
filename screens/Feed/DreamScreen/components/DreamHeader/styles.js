import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

export const ScrollableContent = styled(ScrollView)`
	width: 100%;
	background-color: ${props => props.theme.background};
`

export const DreamBodyContainer = styled.View`
	margin-vertical: 30px;
`

export const DreamBody = styled.Text`
	font-size: 15px;	
	color: ${props => props.theme.text};
`

export const DreamContainer = styled.View`
	padding: 20px;
`;

export const LikeContainer = styled.View`
	margin-top: 30px;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`

export const CommentsContainer = styled.View`
	padding: 20px;
	border-bottom-width: 1px;
	border-bottom-color: ${props => props.theme.surface};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
