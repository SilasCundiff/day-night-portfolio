import { useState, useEffect } from 'react';
import { useDayModeContext } from '@/contexts/DayModeContext';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import animationData from './hero_assets/daycycle.json';

const StyledHeroDaycycle = styled(Lottie)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  transform: scale(400%);
  z-index: -1;
  overflow: hidden;

  @media only screen and (min-width: 600px) {
    transform: scale(300%);
  }
  @media only screen and (min-width: 1280px) {
    transform: scale(120%);
  }
  @media only screen and (min-width: 1480px) {
    transform: scale(100%);
    height: auto;
  }
`;

const moonRiseSegments = [0, 30];
const dayModeSegments = [30, 90];
const nightModeSegments = [90, 120];

function HeroDaycycle() {
  const { dayMode } = useDayModeContext();

  const [currentSegments, setCurrentSegments] = useState(moonRiseSegments);

  const [initialPageLoad, setInitialPageLoad] = useState(false);

  const resumeAnimation = () => {
    if (currentSegments === nightModeSegments) {
      setCurrentSegments(moonRiseSegments);
    }
  };

  useEffect(() => {
    if (!dayMode && initialPageLoad) {
      setCurrentSegments(nightModeSegments);
    } else if (dayMode) {
      setCurrentSegments(dayModeSegments);
    } else if (!initialPageLoad) {
      setInitialPageLoad(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayMode, setCurrentSegments]);

  return (
    <StyledHeroDaycycle
      animationData={animationData}
      play
      loop={false}
      segments={currentSegments}
      onComplete={resumeAnimation}
      speed={2}
    />
  );
}

export default HeroDaycycle;
