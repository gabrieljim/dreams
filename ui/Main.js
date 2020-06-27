import styled from "styled-components";

const Main = styled.View`
  flex: 1;
	justify-content: ${props => props.flexStart ? "flex-start" : "center"};
  align-items: center;
  background-color: ${props => props.theme.background};
`;

export default Main;
