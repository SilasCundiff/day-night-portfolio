import { useDayModeContext } from '@/contexts/DayModeContext';
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
    transition: opacity 3s;
  }
  .twinkling {
    background: transparent url(./images/twinkling.png) repeat top center;
    /* animation: ${({ dayMode }) => !dayMode && twinklingAnima} 300s linear
      infinite; */
  }
  .fadeOut {
    opacity: 0;
  }
  .fadeIn {
    opacity: 1;
  }
`;

function HeroStarfield() {
  const { dayMode } = useDayModeContext();
  return (
    <StyledHeroStarfield dayMode={dayMode}>
      <div className={`stars ${dayMode ? 'fadeOut' : 'fadeIn'}`}></div>
      <div className={`twinkling ${dayMode ? 'fadeOut' : 'fadeIn'}`}></div>
    </StyledHeroStarfield>
  );
}

export default HeroStarfield;
