import { useDayModeContext } from '@/contexts/DayModeContext';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import InViewTester from '@/components/reusables/InViewTester';
import HeroDaycycle from './HeroDaycycle';
import HeroCTA from './HeroCTA';
import { useEffect } from 'react';
const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
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
      {/* <InViewTester inView={inView} label='hero' /> */}
      <HeroCTA />
      <HeroDaycycle />
    </StyledHero>
  );
};
export default Hero;
