import styled from 'styled-components';

const StyledMobileImage = styled.div`
  margin-bottom: 1rem;
  & .image-wrapper {
  }
`;

export const MobileImage = ({ children }) => (
  <StyledMobileImage>
    <div className='image-wrapper'>{children}</div>
  </StyledMobileImage>
);
