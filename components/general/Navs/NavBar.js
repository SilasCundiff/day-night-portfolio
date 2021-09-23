import React from 'react';
import Nav from './Nav';
import Link from 'next/link';
import LogoSVG from '../LogoSVG';
import SpeechBubble from '../SpeechBubble/SpeechBubble';
const NavBar = () => {
  return (
    <Nav>
      <Nav.Control />
      <Nav.Wrapper>
        <Nav.Logo>
          <Link passHref href='#home'>
            <a>
              <LogoSVG />
              Silas Cundiff
            </a>
          </Link>
          <SpeechBubble
            parentInView
            openDelay={3000}
            closeDelay={8000}
            speechOrigin='top'
          >
            <p>
              Silas means &quot;of the forest&quot;, and the Cundiff family had
              a coat of arms.
            </p>
            <p>
              It&apos;s the inspiration for my logo and the theme of this site.
            </p>
          </SpeechBubble>
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
