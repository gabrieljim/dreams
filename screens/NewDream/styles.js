import styled from "styled-components";
import { Container } from "ui/Containers";

export const TitleContainer = styled(Container)`
	width: 90%
	justify-content: center;
	flex-basis: 30%;
	margin: auto;
`;

export const Title = styled.Text`
	color: ${props => props.theme.text};
	text-align: center;
	font-size: 27px;
`;

export const FormContainer = styled(Container)`
	width: 90%;
	flex-basis: 70%;
`
