import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  position: relative;
  flex: 1 1 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme: { primary } }) => primary};
  color: ${({ theme: { secondary } }) => secondary};
  font-weight: ${({ theme: { bold } }) => bold};
  font-size: clamp(1.25rem, 2vw, 3rem);
  overflow-y: visible;
  transition: all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:hover {
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  }
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (min-width: 1280px) {
    flex: 1 1 20%;
    background: none;
  }
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export { Logo };
