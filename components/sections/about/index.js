import React from 'react';
import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
const StyledAbout = styled.div`
  position: relative;
  width: 100vw;
  /* height: 100vh; */
`;

function About() {
  return (
    <StyledAbout>
      <CurvedSVG />
      <span>this is the About component</span>
    </StyledAbout>
  );
}

export default About;
