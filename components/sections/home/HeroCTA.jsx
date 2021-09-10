import React from 'react';
import styled from 'styled-components';
import Button from '@/components/reusables/Buttons/Button';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

const StyledHeroCTA = styled.div`
  width: 100%;

  position: absolute;
  /* top: 30%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  text-align: center;
  & .CTA__Title,
  .CTA__Subtitle {
    transition: color 3s, background-color 3s;
  }
  .CTA__Title {
    margin-bottom: 1.75rem;
  }
  .CTA__Subtitle {
    font-size: calc(20px + (40 - 20) * ((100vw - 300px) / (1920 - 300)));
    font-weight: ${({ theme: { thin } }) => thin};
    margin-bottom: 2.75rem;
    opacity: 80%;
  }
  .CTA__button-container {
    display: flex;

    .CTA__button--left {
      margin: 0 1.2rem 0 auto;
    }
    .CTA__button--right {
      margin: 0 auto 0 1.2rem;
    }
  }

  @media only screen and (min-width: 1980px) {
    top: 35%;
  }
`;

function HeroCTA() {
  return (
    <StyledHeroCTA className='CTA'>
      <Parallax y={['-50%', '100%']}>
        <h1 className='CTA__Title'>Silas Cundiff</h1>
        <h2 className='CTA__Subtitle'>Designer - Developer - Dreamer</h2>
        <div className='CTA__button-container'>
          <Button className='CTA__button--left'>
            <Link href='#projects'>My Work</Link>
          </Button>
          <Button className='CTA__button--right' ghost>
            <Link href='#contact'>Let&apos;s Chat</Link>
          </Button>
        </div>
      </Parallax>
    </StyledHeroCTA>
  );
}

export default HeroCTA;
