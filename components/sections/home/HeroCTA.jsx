import React from 'react';
import styled from 'styled-components';
import Button from '@/components/reusables/Buttons/Button';
const StyledHeroCTA = styled.div`
  width: 100%;
  /* background: blue; */
  height: 50%;
  margin-top: 30%;

  .CTA__Title {
    font-size: 3rem;
    text-align: center;
    color: ${({ theme: { primary } }) => primary};
    font-weight: ${({ theme: { bold } }) => bold};
    margin-bottom: 1.25rem;
  }
  .CTA__Subtitle {
    font-size: 1.25rem;
    text-align: center;
    color: ${({ theme: { primary } }) => primary};
    font-weight: ${({ theme: { light } }) => light};
    opacity: 80%;
    margin-bottom: 1.75rem;
  }
  .CTA__button-container {
    display: flex;
    width: 100%;

    & button {
      margin: 0 auto;
    }
  }
`;

function HeroCTA() {
  return (
    <StyledHeroCTA className='CTA'>
      <h1 className='CTA__Title'>Silas Cundiff</h1>
      <h2 className='CTA__Subtitle'>Designer - Developer - Dreamer</h2>
      <div className='CTA__button-container'>
        <Button>My Work</Button>
        <Button ghost>Let&apos;s Chat</Button>
      </div>
    </StyledHeroCTA>
  );
}

export default HeroCTA;
