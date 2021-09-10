import React from 'react';
import styled from 'styled-components';
import { useNavContext } from '../NavContext';

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  overflow: hidden;
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;
  background: ${({ theme: { secondary } }) => secondary};
  clip-path: ${(props) =>
    props.navOpen
      ? 'circle(300% at 100% 0%)'
      : 'circle(0 at calc(95%) calc(95%) )'};

  transition: clip-path 0.5s;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    background: none;
    clip-path: unset;
    position: fixed;
    left: 50%;
    z-index: 999;
    overflow: hidden;
    height: 10vh;
    width: 85vw;
    transform: translateX(-50%);
  }
`;

const Wrapper = ({ children }) => {
  const { navOpen } = useNavContext();

  return <StyledWrapper navOpen={navOpen}>{children}</StyledWrapper>;
};

export { Wrapper };
