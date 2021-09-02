import styled from 'styled-components';
import HeroStarfield from './HeroStarfield';
import HeroDaycycle from './HeroDaycycle';
import HeroCTA from './HeroCTA';
const StyledHero = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const Hero = ({ dayMode }) => {
  return (
    <StyledHero>
      <HeroCTA />
      <HeroDaycycle dayMode={dayMode} />
      <HeroStarfield dayMode={dayMode} />
    </StyledHero>
  );
};
export default Hero;
