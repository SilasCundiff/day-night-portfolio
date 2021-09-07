import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 460px;
  /* margin: 0 19.8%; //large */

  margin: 0 auto;
  @media only screen and (min-width: 600px) {
    max-width: 600px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1100px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1380px;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 1680px;
  }
`;

function Container({ children, ...rest }) {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}

export default Container;
