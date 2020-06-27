import styled from "styled-components";
import Main from "ui/Main";
import { Container } from "ui/Containers";

export const Content = styled(Main)`
	justify-content: space-evenly;
`;

export const TitleContainer = styled(Container)`
	justify-content: center;
`

export const FormContainer = styled(Container)`
	justify-content: center;
	padding-horizontal: 60px;
`

export const Title = styled.Text`
	color: ${props => props.theme.text};
	font-size: 40px;
	margin: 20px;
`;
