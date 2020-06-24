import styled from "styled-components";

export const Text = styled.Text`
  color: ${props => props.theme.text};
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;


export const ErrorText = styled.Text`
  color: ${props => props.theme.error};
`;

export const FooterText = styled(Text)`
  fontSize: 13px;
`;

