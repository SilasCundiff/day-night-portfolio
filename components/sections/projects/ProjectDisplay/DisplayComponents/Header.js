import styled from 'styled-components';

const StyledHeader = styled.div`
  position: relative;
`;

export const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;
