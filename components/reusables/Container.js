import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 19.8%; //large
  padding: 2%;
  margin: 0;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
