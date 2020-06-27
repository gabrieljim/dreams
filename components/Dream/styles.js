import styled from "styled-components";
import {TouchableNativeFeedback} from "react-native-gesture-handler";

export const Content = styled.View`
	background-color: ${props => props.theme.surface};
	justify-content: space-between;
	border-bottom-width: 2px;
	border-bottom-color: ${props => props.theme.background};
`

export const TouchableDreamContainer = styled(TouchableNativeFeedback)`
	padding: 10px;
`

export const DreamBodyContainer = styled.View`
	margin-vertical: 30px;
`

export const DreamBody = styled.Text`
	font-size: 15px;	
	color: ${props => props.theme.text};
`

