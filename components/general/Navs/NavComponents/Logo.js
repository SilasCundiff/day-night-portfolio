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
  font-size: 2rem;
  transition: color 3s;
  &:hover {
    color: ${({ theme: { accent } }) => accent};
    transition: color 0.2s;
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
    font-size: 2rem;
  }
  @media only screen and (min-width: 1920px) {
    font-size: 3rem;
  }
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export { Logo };
