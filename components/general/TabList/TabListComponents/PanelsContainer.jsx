import styled from 'styled-components';

const StyledPanelsContainer = styled.div`
  background-color: ${({ theme: { primary } }) => primary};
  height: 100%;
  padding: 1rem 1.5rem 0;

  overflow-y: scroll;
  /* overflow-x: scroll; */
`;

const PanelsContainer = ({ children }) => (
  <StyledPanelsContainer>{children}</StyledPanelsContainer>
);

export { PanelsContainer };
