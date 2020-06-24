import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;
