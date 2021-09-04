import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: calc(42px + (80 - 42) * ((100vw - 300px) / (1920 - 300)));
  margin-bottom: 0.5rem;
  color: ${({ theme: { secondary } }) => secondary};
`;

export const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;
