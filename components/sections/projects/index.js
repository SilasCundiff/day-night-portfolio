import React from 'react';
import styled from 'styled-components';
import { ProjectCuisineQuest } from './ProjectDisplay';
import Divider from './Divider';

const StyledProjects = styled.div`
  margin-bottom: 25vh;
  .divider__header {
    font-size: calc(38px + (96 - 38) * ((100vw - 300px) / (1920 - 300)));
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <Divider>
        <h2 className='divider__header'>
          Let me show you some of my projects to prove my skills.
        </h2>
      </Divider>
      <ProjectCuisineQuest />
      <ProjectCuisineQuest />
      <ProjectCuisineQuest />
    </StyledProjects>
  );
}

export default Projects;
