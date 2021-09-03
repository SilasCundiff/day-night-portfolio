import styled from 'styled-components';
import HeroStarfield from './HeroStarfield';
import HeroDaycycle from './HeroDaycycle';
import HeroCTA from './HeroCTA';
const StyledHero = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroCTA />
      <HeroDaycycle />
      <HeroStarfield />
    </StyledHero>
  );
};
export default Hero;
