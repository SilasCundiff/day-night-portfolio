import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin: 1rem 2rem 0;
  }
  & button:last-of-type {
    color: ${({ theme: { accent } }) => accent};
  }
`;

export const ButtonContainer = ({ children }) => (
  <StyledButtonContainer>{children}</StyledButtonContainer>
);
