import React from 'react';
import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
const StyledContact = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .flipper {
    transform: rotateX(180deg);
  }
`;

function Contact() {
  return (
    <StyledContact>
      <span>this is the Contact component</span>

      <div className='flipper'>
        <CurvedSVG bottom />
      </div>
    </StyledContact>
  );
}

export default Contact;
