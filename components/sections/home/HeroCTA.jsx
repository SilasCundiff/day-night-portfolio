import React from 'react';
import styled from 'styled-components';
import Button from '@/components/reusables/Buttons/Button';
const StyledHeroCTA = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 30%;

  & * {
    transition: color 2s, background-color 2s;
  }
  .CTA__Title {
    text-align: center;

    margin-bottom: 1.25rem;
  }
  .CTA__Subtitle {
    font-size: 1.25rem;
    text-align: center;
    font-weight: ${({ theme: { light } }) => light};
    opacity: 80%;
    margin-bottom: 1.75rem;
  }
  .CTA__button-container {
    display: flex;
    width: 100%;

    .CTA__button--left {
      margin: 0 1.2rem 0 auto;
    }
    .CTA__button--right {
      margin: 0 auto 0 1.2rem;
    }
  }
`;

function HeroCTA() {
  return (
    <StyledHeroCTA className='CTA'>
      <h1 className='CTA__Title'>Silas Cundiff</h1>
      <h2 className='CTA__Subtitle'>Designer - Developer - Dreamer</h2>
      <div className='CTA__button-container'>
        <Button className='CTA__button--left'>My Work</Button>
        <Button className='CTA__button--right' ghost>
          Let&apos;s Chat
        </Button>
      </div>
    </StyledHeroCTA>
  );
}

export default HeroCTA;
