import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
const StyledHome = styled.div``;

function Home({ dayMode }) {
  return (
    <StyledHome id='home'>
      <Hero dayMode={dayMode} />
    </StyledHome>
  );
}

export default Home;
