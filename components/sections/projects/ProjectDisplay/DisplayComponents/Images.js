import styled from 'styled-components';

const StyledImages = styled.div`
  position: relative;
`;

export const Images = ({ children }) => <StyledImages>{children}</StyledImages>;
