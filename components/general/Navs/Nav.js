import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  ButtonContainer,
  Control,
  Footer,
  ItemContainer,
  List,
  ListItem,
  Logo,
  Wrapper,
} from './NavComponents';
import { NavProvider } from './NavContext';

const StyledNav = styled.nav`
  background: none;
   font-family: 'Poppins', sans-serif;
`;

const Nav = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);

  const handleNavToggle = () => {
    setnavOpen(!navOpen);
  };

  const handleCloseNav = () => {
    setnavOpen(false);
  };

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!navOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [navOpen]);

  return (
    <NavProvider value={{ navOpen, handleNavToggle, handleCloseNav }}>
      <StyledNav navOpen={navOpen}>{children}</StyledNav>
    </NavProvider>
  );
};

Nav.Control = Control;
Nav.Logo = Logo;
Nav.List = List;
Nav.ListItem = ListItem;
Nav.ItemContainer = ItemContainer;
Nav.ButtonContainer = ButtonContainer;
Nav.Footer = Footer;
Nav.Wrapper = Wrapper;

export default Nav;
