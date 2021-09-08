import React from 'react';
import Nav from './Nav';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Nav>
      <Nav.Control />
      <Nav.Logo>Silas Cundiff</Nav.Logo>
      <Nav.List>
        <Nav.ItemContainer>
          <Nav.ListItem>
            <Link passHref href='/'>
              <a>Home</a>
            </Link>
          </Nav.ListItem>
          <Nav.ListItem>
            <Link passHref href='/'>
              <a>About</a>
            </Link>
          </Nav.ListItem>
          <Nav.ListItem>
            <Link passHref href='/'>
              <a>Projects</a>
            </Link>
          </Nav.ListItem>
          <Nav.ListItem>
            <Link passHref href='/'>
              <a>Contact</a>
            </Link>
          </Nav.ListItem>
        </Nav.ItemContainer>
      </Nav.List>
      <Nav.Footer>copyright Silas Cundiff&copy; 2021</Nav.Footer>
    </Nav>
  );
};

export default NavBar;
