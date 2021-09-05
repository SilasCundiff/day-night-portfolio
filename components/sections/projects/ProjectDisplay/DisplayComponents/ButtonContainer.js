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
  @media only screen and (min-width: 1280px) {
    /* max-width: 50%; */
    flex-direction: row;
    & button {
      margin: 1rem 3rem 0 0;
    }
  }
`;

export const ButtonContainer = ({ children }) => (
  <StyledButtonContainer>{children}</StyledButtonContainer>
);
