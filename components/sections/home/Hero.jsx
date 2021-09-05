import styled from 'styled-components';
import HeroStarfield from './HeroStarfield';
import HeroDaycycle from './HeroDaycycle';
import HeroCTA from './HeroCTA';
const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroCTA />
      <HeroDaycycle />
      {/* <HeroStarfield /> */}
    </StyledHero>
  );
};
export default Hero;
