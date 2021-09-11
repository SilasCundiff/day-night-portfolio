import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import HeroDaycycle from './HeroDaycycle';
import HeroCTA from './HeroCTA';
import { useEffect } from 'react';
const StyledHero = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
`;

const Hero = () => {
  const { setHeroInView } = useDayModeContext();
  const [ref, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    inView ? setHeroInView(true) : setHeroInView(false);
  }, [inView, setHeroInView]);

  return (
    <StyledHero ref={ref}>
      <HeroCTA />
      <HeroDaycycle />
    </StyledHero>
  );
};
export default Hero;
