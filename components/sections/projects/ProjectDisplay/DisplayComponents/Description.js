import styled from 'styled-components';

const StyledDescription = styled.div`
  font-size: calc(18px + (30 - 18) * ((100vw - 300px) / (1920 - 300)));
  font-weight: ${({ theme: { thin } }) => thin};
  color: ${({ theme: { accent } }) => accent};
  margin-bottom: 1rem;
`;

export const Description = ({ children }) => (
  <StyledDescription>{children}</StyledDescription>
);
