import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinklingAnima = keyframes`
   from {background-position:0 0;}
   to {background-position:-10000px 5000px;}
`;

const StyledHeroStarfield = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: -2;

  .stars,
  .twinkling {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }
  .stars {
    background: url(./images/stars.png);
  }
  .twinkling {
    background: transparent url(./images/twinkling.png) repeat top center;
    animation: ${({ dayMode }) => !dayMode && twinklingAnima} 300s linear
      infinite;
  }
`;

function HeroStarfield({ dayMode }) {
  return (
    <StyledHeroStarfield dayMode={dayMode}>
      <div className='stars'></div>
      <div className={`twinkling`}></div>
    </StyledHeroStarfield>
  );
}

export default HeroStarfield;
