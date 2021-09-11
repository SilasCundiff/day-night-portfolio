import React from 'react';
import styled from 'styled-components';
import Button from '@/components/reusables/Buttons/Button';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

const StyledHeroCTA = styled.div`
  text-align: center;
  .subtitle {
    font-size: clamp(1rem, 2vw, 3rem);
    font-weight: ${({ theme: { thin } }) => thin};
    margin-block: clamp(0.5rem, 1vw, 2rem) clamp(1.5rem, 2.5vw, 5rem);
  }
`;

function HeroCTA() {
  return (
    <StyledHeroCTA>
      <Parallax y={['-60%', '150%']}>
        <h1>Silas Cundiff</h1>
        <h2 className='subtitle'>Designer - Developer - Dreamer</h2>
        <div>
          <Button>
            <Link href='#projects'>My Work</Link>
          </Button>
          <Button ghost>
            <Link href='#contact'>Let&apos;s Chat</Link>
          </Button>
        </div>
      </Parallax>
    </StyledHeroCTA>
  );
}

export default HeroCTA;
