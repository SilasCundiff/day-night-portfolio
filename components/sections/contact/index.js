import React from 'react';
import styled from 'styled-components';
import CurvedSVG from '@/components/general/CurvedSVG';
import Container from '@/components/general/Container';

import Form from './Form';
import Button from '@/components/general/Buttons/Button';
import Link from 'next/link';
const StyledContact = styled.div`
  position: relative;
  height: 200vh;

  .contact--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .github--container {
    width: 80%;
    margin: 10vh auto 15vh;
    .button-container {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      & button:last-of-type {
        margin-top: 1rem;
      }
    }
  }
  .github--heading {
    margin-bottom: 0.5rem;
    padding-bottom: 2rem;
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: clamp(3rem, 4vw, 8rem);
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
  @media only screen and (min-width: 1280px) {
    .github--container {
      .button-container {
        display: flex;
        flex-direction: row;
        max-width: 100%;
        .contact-btn {
          font-size: clamp(1rem, 1.5vw, 2rem);
          margin: 0;
        }
        & button:last-of-type {
          margin-top: 0;
          margin-left: 1.2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1920px) {
    height: 130vh;
    display: flex;
    .github--container {
      max-width: 45%;
      margin: 0;
      height: 35%;
    }
    .contact--container {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
    .footer {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

function Contact() {
  return (
    <StyledContact id='contact'>
      <Container className='contact--container'>
        <Container className='github--container'>
          <h2 className='github--heading'>
            View my resume for my work experience!
          </h2>
          <div className='button-container'>
            <Button className='contact-btn'>
              <Link href='/extras/resume.pdf' download>
                Download Resume
              </Link>
            </Button>
          </div>
        </Container>

        <Form />

        <footer className='footer'>Made by Silas Cundiff with NextJS</footer>
      </Container>
      <div className='flipper'>
        <CurvedSVG className='contact--shapeSVG' />
      </div>
    </StyledContact>
  );
}

export default Contact;
