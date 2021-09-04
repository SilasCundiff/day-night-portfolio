import React from 'react';
import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
import Container from '@/components/reusables/Container';
import Divider from '../projects/Divider';
import Form from './Form';
import Button from '@/components/reusables/Buttons/Button';
const StyledContact = styled.div`
  /* display: flex; */
  /* position: relative; */
  .contact__container {
    width: 80%;
    margin: 0 auto 15vh;
  }
  .contact__github {
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    color: transparent;
  }
  .flipper {
    transform: rotateX(180deg);
  }
`;

function Contact() {
  return (
    <StyledContact>
      {/* <Divider>For more projects, check out my github</Divider> */}
      <Container className='contact__container'>
        <h2 className='contact__github'>
          For more projects, <br /> check out my github
        </h2>
        <Button>Github</Button>
      </Container>
      <Form />
      <div className='flipper'>
        <CurvedSVG bottom />
      </div>
    </StyledContact>
  );
}

export default Contact;
