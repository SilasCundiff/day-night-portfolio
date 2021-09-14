import React from 'react';
import styled from 'styled-components';
import { ProjectCuisineQuest } from './ProjectDisplay';
import Divider from './Divider';
import { ProjectZenify } from './ProjectDisplay/ProjectZenify';
import { ProjectOldPortfolio } from './ProjectDisplay/ProjectOldPortfolio';
import Link from 'next/link';
const StyledProjects = styled.div`
  margin-bottom: 25vh;
  position: relative;
  overflow: clip;

  .divider__header {
    font-size: clamp(2.4rem, 5vw, 6rem);
  }
  .wrapper {
    position: relative;
  }

  .projects__background {
    position: absolute;
    top: 0;
    width: 110%;
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 80vh;
    z-index: -1;
    opacity: 0.4;
    font-weight: 700;
    color: transparent;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
  .project-btn {
    border: ${({ theme: { secondary } }) => secondary} solid 3px;
    color: ${({ theme: { secondary } }) => secondary};
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: ${({ theme: { secondary } }) => secondary};
      transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    &:hover {
      color: ${({ theme: { primary } }) => primary};
      transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
      border: ${({ ghost, theme: { primary } }) =>
        ghost && `${primary} solid 3px`};
    }
    &:hover:after {
      width: 100%;
    }
    & a {
      color: ${({ theme: { secondary } }) => secondary};
    }
    &:hover a {
      color: ${({ theme: { primary } }) => primary};
    }
  }
  .divider__footer {
    font-size: clamp(2rem, 3vw, 5rem);
  }
  .portfolio-github--link {
    color: ${({ theme: { text } }) => text};
    margin-top: 1em;
    font-size: clamp(1.5rem, 3vw, 5rem);
    font-weight: ${({ theme: { thin } }) => thin};
    & a {
      transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    &:hover a {
      color: ${({ theme: { primary } }) => primary};
    }
  }
  @media only screen and (min-width: 1280px) {
    overflow: hidden;
    padding-bottom: 20vh;
    .projects__background {
      width: 40%;
      opacity: 0.8;
      font-size: 50vh;
      letter-spacing: -25vh;
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
      <div className='wrapper'>
        <div className='projects__background'>PROJECTS</div>
        <ProjectZenify />
        <ProjectCuisineQuest />
        <ProjectOldPortfolio />
      </div>
      <Divider>
        <h2 className='divider__footer'>
          Want to know how this website was made?
        </h2>
        <h3 className='portfolio-github--link'>
          <Link href='https://github.com/SilasCundiff/silascundiff'>
            Click here for it&apos;s GitHub Page!
          </Link>
        </h3>
      </Divider>
    </StyledProjects>
  );
}

export default Projects;
