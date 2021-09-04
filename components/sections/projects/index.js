import React from 'react';
import styled from 'styled-components';
import { ProjectCuisineQuest } from './ProjectDisplay';
import Divider from './Divider';

const StyledProjects = styled.div`
  .divider__subheader {
    font-size: 1rem;
    letter-spacing: 1rem;
    margin-top: 1rem;
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <Divider>
        <h2 className='divider__header'>Talk is cheap, Projects hold value.</h2>
        <span className='divider__subheader'>Let me show you my worth.</span>
      </Divider>
      <ProjectCuisineQuest />
      <ProjectCuisineQuest />
      <ProjectCuisineQuest />
    </StyledProjects>
  );
}

export default Projects;
