import styled from 'styled-components';

const StyledDesktopImage = styled.div`
  overflow-x: scroll;
  margin-bottom: 0.5rem;
  & .image-wrapper {
    width: 200vw;
    aspect-ratio: 16 / 9;
    position: relative;
  }
  @media only screen and (min-width: 1280px) {
    & .image-wrapper {
      width: 80%;
    }
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const DesktopImage = ({ children }) => (
  <StyledDesktopImage>
    <div className='image-wrapper'>{children}</div>
  </StyledDesktopImage>
);
