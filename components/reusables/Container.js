import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 640px) {
    max-width: 600px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 900px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1024px;
  }
  @media only screen and (min-width: 1920px) {
    max-width: unset;
    width: clamp(1140px, 60vw, 80vw);
  }
`;

function Container({ children, ...rest }) {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}

export default Container;
