import styled from 'styled-components';

const StyledImages = styled.div`
  /* overflow-x: scroll; */
`;

export const Images = ({ children }) => <StyledImages>{children}</StyledImages>;
