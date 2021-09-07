import React from 'react';
import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
import Container from '@/components/reusables/Container';
import Divider from '../projects/Divider';
import Form from './Form';
import Button from '@/components/reusables/Buttons/Button';
const StyledContact = styled.div`
  /* display: flex; */
  position: relative;
  height: 200vh;

  .contact__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .contact__github {
    width: 80%;
    margin: 10vh auto 15vh;
  }
  .contact__github--heading {
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    color: transparent;
  }
  .flipper {
    transform: rotateX(180deg) rotateY(180deg);
    position: absolute;
    overflow-x: hidden;
    inset: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
  }
  .footer {
    margin: auto auto 4rem;
    width: 100%;
    text-align: center;
  }

  @media only screen and (min-width: 1920px) {
    height: 120vh;
    .contact__github {
      max-width: 45%;
      margin: 30vh 0 auto auto;
    }
    .contact__container {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    .footer {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media only screen and (min-width: 2500px) {
    .contact__github {
      /* max-width: 50%; */
    }
    .contact__container {
      /* max-width: 1840px; */
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      {/* <Divider>For more projects, check out my github</Divider> */}
      <Container className='contact__container'>
        <Container className='contact__github'>
          <h2 className='contact__github--heading'>
            For more projects, <br /> check out my github
          </h2>
          <Button>Github</Button>
        </Container>
        <Form />
        <footer className='footer'>Made by Silas Cundiff with NextJS</footer>
      </Container>
      <div className='flipper'>
        <CurvedSVG className='contact__shapeSVG' />
      </div>
    </StyledContact>
  );
}

export default Contact;
