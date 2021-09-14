import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  flex: 1 1 10%;
  width: 100%;
  height: fit-content;
  margin-top: auto;
  color: ${({ theme: { primary } }) => primary};
  background: ${({ theme: { secondary } }) => secondary};
  font-weight: ${({ theme: { thin } }) => thin};
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export { Footer };
