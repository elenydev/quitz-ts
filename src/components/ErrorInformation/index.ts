import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.brightRed};
  font-size: 12px;
  width: fit-content;
`;

export default ErrorMessage;
