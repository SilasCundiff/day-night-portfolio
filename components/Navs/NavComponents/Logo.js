import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  flex: 1 1 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme: { primary } }) => primary};
  color: ${({ theme: { secondary } }) => secondary};
  font-weight: ${({ theme: { bold } }) => bold};
  font-size: 22px;
  @media only screen and (min-width: 1280px) {
    flex: 1 1 20%;
    background: none;
    font-size: 2rem;
  }
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export { Logo };
