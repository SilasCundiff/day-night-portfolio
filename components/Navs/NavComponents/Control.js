import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useNavContext } from '../NavContext';

const StyledNavControl = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  padding: 2rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1000;
  color: ${({ theme: { primary } }) => primary};
  .nav-control-open,
  .nav-control-close {
    position: absolute;
    transition: all 0.5s;
  }
  & .icon-show {
    opacity: 1;
    visibility: visible;
    transform: rotate(360deg);
  }
  & .icon-hide {
    opacity: 0;
    visibility: hidden;
  }
  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

const Control = () => {
  const { navOpen, handleNavToggle } = useNavContext();
  return (
    <StyledNavControl onClick={handleNavToggle}>
      <FaTimes
        className={`nav-control-close ${navOpen ? 'icon-show' : 'icon-hide'}`}
      />
      <FaBars
        className={`nav-control-open ${navOpen ? 'icon-hide' : 'icon-show'}`}
      />
    </StyledNavControl>
  );
};

export { Control };
