import React from 'react';
import styled from 'styled-components';
import Hero from './Hero/Hero';
const StyledHome = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  overflow-x: hidden;
  height: 100%;
`;

function Home({ dayMode }) {
  return (
    <StyledHome id='home'>
      <Hero dayMode={dayMode} />
    </StyledHome>
  );
}

export default Home;
