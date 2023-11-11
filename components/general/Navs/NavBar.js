import React from 'react';
import Nav from './Nav';
import Link from 'next/link';
import LogoSVG from '../LogoSVG';

const NavBar = () => {
  return (
    <Nav>
      <Nav.Control />
      <Nav.Wrapper>
        <Nav.Logo>
          <Link passHref href='#home'>
            <a>
              <LogoSVG />
            </a>
          </Link>
        </Nav.Logo>
        <Nav.List>
          <Nav.ItemContainer>
            <Nav.ListItem>
              <Link passHref href='#about'>
                <a>About</a>
              </Link>
            </Nav.ListItem>
            <Nav.ListItem>
              <Link passHref href='#projects'>
                <a>Projects</a>
              </Link>
            </Nav.ListItem>
            <Nav.ListItem>
              <Link passHref href='#contact'>
                <a>Contact</a>
              </Link>
            </Nav.ListItem>
          </Nav.ItemContainer>
        </Nav.List>
      </Nav.Wrapper>
    </Nav>
  );
};

export default NavBar;
