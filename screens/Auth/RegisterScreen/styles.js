import styled from "styled-components";
import { Container } from "ui/Containers";
import Main from "ui/Main";

export const Content = styled(Main)`
	justify-content: space-evenly;
`;

export const TitleContainer = styled(Container)`
	flex-grow: 1;
	justify-content: flex-end;
`;

export const Title = styled.Text`
 color: ${props => props.theme.text};
	font-size: 40px;
	margin: 20px;
`;

export const FormContainer = styled(Container)`
	flex-grow: 3;
	justify-content: flex-start;
	padding-horizontal: 60px;
`;
