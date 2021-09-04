import styled from 'styled-components';

const StyledDesktopImage = styled.div`
  overflow-x: scroll;
  margin-bottom: 0.5rem;
  & .image-wrapper {
    width: 200vw;
    aspect-ratio: 16 / 9;
    position: relative;
  }
`;

export const DesktopImage = ({ children }) => (
  <StyledDesktopImage>
    <div className='image-wrapper'>{children}</div>
  </StyledDesktopImage>
);
