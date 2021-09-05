import styled from 'styled-components';

const StyledMobileImage = styled.div`
  margin-bottom: 1rem;
  @media only screen and (min-width: 1280px) {
    position: absolute;
    bottom: -10%;
    right: 10%;
    width: 360px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const MobileImage = ({ children }) => (
  <StyledMobileImage>
    <div className='image-wrapper'>{children}</div>
  </StyledMobileImage>
);
