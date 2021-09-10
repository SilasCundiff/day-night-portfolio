import React from 'react';
import styled from 'styled-components';
import { ProjectCuisineQuest } from './ProjectDisplay';
import Divider from './Divider';
import { ProjectZenify } from './ProjectDisplay/ProjectZenify';
import { ProjectOldPortfolio } from './ProjectDisplay/ProjectOldPortfolio';

const StyledProjects = styled.div`
  margin-bottom: 25vh;
  position: relative;

  .divider__header {
    font-size: calc(38px + (96 - 38) * ((100vw - 300px) / (1920 - 300)));
  }
  .projects__background {
    position: absolute;
    /* left: -1800px; */
    top: 120vh;
    /* width: 100vw; */
    /* height: 100%; */
    /* margin-top: -50vh; */
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 90vw;
    z-index: -1;
    letter-spacing: 0.5;
    opacity: 0.5;
    font-weight: 700;
    color: transparent;
    writing-mode: vertical-rl;
    text-orientation: upright;
    @media only screen and (min-width: 1280px) {
      top: 80vh;
      left: -5vw;
      font-size: 40vw;
      letter-spacing: -40vh;
    }
  }
`;

function Projects() {
  return (
    <StyledProjects id='projects'>
      <Divider>
        <h2 className='divider__header'>
          Let me show you some of my projects to prove my skills.
        </h2>
      </Divider>
      <div className='projects__background'>PROJECTS</div>
      <ProjectZenify />
      <ProjectCuisineQuest />
      <ProjectOldPortfolio />
    </StyledProjects>
  );
}

export default Projects;
