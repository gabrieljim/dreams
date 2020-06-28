import styled from "styled-components";

export const Content = styled.View`
	background-color: ${props => props.theme.surface};
	justify-content: center;
	border-bottom-width: 2px;
	border-bottom-color: ${props => props.theme.background};
	padding: 10px;
`

export const CommentInfo = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const TimeSince = styled.Text`
	color: ${props => props.theme.text};
	font-size: 12px;	
`

export const CommentBodyContainer = styled.Text`
	margin-top: 20px;
	margin-bottom: 10px;
`

export const CommentBody = styled.Text`
	font-size: 15px;
	color: ${props => props.theme.text};
`
