import { useState, useEffect } from 'react';
import { useDayModeContext } from '@/contexts/DayModeContext';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import animationData from './hero_assets/daycycle.json';

const StyledHeroDaycycle = styled(Lottie)`
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  transform: scale(400%);
  z-index: -1;
  overflow: hidden;
  #Moon,
  #Sun {
    /* transform: ${({ offsety }) => `translateY(${offsety * 0.3}px)`}; */
    /* transition: transform 0s; */
  }
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
  // ? Commented out code is for lazy loading and parallax, which I am still debating if I want to add to this component.
  // const [animationData, setAnimationData] = useState();
  const [currentSegments, setCurrentSegments] = useState(moonRiseSegments);
  const [initialPageLoad, setInitialPageLoad] = useState(false);

  // const [offsetY, setOffsetY] = useState(0);

  const resumeAnimation = () => {
    if (currentSegments === nightModeSegments) {
      setCurrentSegments(moonRiseSegments);
    }
  };

  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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

  // useEffect(() => {
  //   const loadData = async () => {
  //     const data = await import('./hero_assets/daycycle.json');

  //     setAnimationData(data);
  //   };
  //   loadData();
  // }, []);

  // if (!animationData) return <div>Loading...</div>;

  return (
    <StyledHeroDaycycle
      animationData={animationData}
      play
      loop={false}
      segments={currentSegments}
      onComplete={resumeAnimation}
      // offsety={offsetY}
    />
  );
}

export default HeroDaycycle;
