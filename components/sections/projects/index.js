import React from 'react';
import styled from 'styled-components';
import { ProjectCuisineQuest } from './ProjectDisplay';
import Divider from './Divider';
import { ProjectZenify } from './ProjectDisplay/ProjectZenify';
import { ProjectOldPortfolio } from './ProjectDisplay/ProjectOldPortfolio';
import Link from 'next/link';
const StyledProjects = styled.div`
  position: relative;
  overflow: clip; 
  font-family: 'Poppins', sans-serif;

  .divider__header {
    font-size: clamp(2.4rem, 5vw, 6rem);
  }
  .wrapper {
    position: relative;
  }
  .container-wrapper {
    width: 100%;
    display: flex;
    background: ${({ theme: { gradient } }) => gradient};
    margin: 10rem auto;
  }

  .container {
    margin: 0 auto;
    font-size: clamp(1rem, 3vw, 2rem);
    max-width: 1200px;
    display: flex; 
    flex-direction: column;
    padding: 4rem;
    color: ${({ theme: { primary } }) => primary};

    h2 {
      font-size: clamp(2.4rem, 5vw, 2rem);
      color: ${({ theme: { primary } }) => primary};
      margin-bottom: 2rem;
    }
    h3 {
      font-size: clamp(1.5rem, 3vw, 2rem);
      maring-bottom: 4rem;
    }

    ul li, p {
      margin-bottom: 2rem;
      a {
        color: ${({ theme: { text } }) => text};
      }
    }
    
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
    padding-bottom: 5vh;
    .projects__background {
      width: 30%;
      opacity: 0.8;
      font-size: 50vh;
      letter-spacing: -25vh;
    }
  }
`;

function Projects() {
  return (
    <StyledProjects id='projects'>

      <section className='container-wrapper'>
        <div className='container'>
        <h2>Sorry for the mess! This site is currently under construction</h2>
          <p>Due to unfortunate circumstances, I find myself in an awkward position where my portfolio is woefully under-prepared for showcasing my current experience and skill set. I am currently working on a new portfolio to showcase my skills and experience, but until it is in a presentable state, here is rushed section containing a list of some of the sites and projects I&apos;ve worked on.</p>
          <p>This entire site and how I&apos;m displaying my projects are far below my own current standard, but I don&apos;t have the luxury of spending weeks to overhaul it before I begin search for a new position.</p>
          <p>Thank you for your patience!</p>
          <ul>
            <li><p className='description'><a href="https://annagriffin.com">AnnaGriffin.com a WordPress site</a> A large online Retailer for premium arts and crafts. I worked heavily on maintaining this Large site, with tens of thousands of monthly customers. I helped improve accessibility, performance, and developed a few new features</p></li>
            <li><p className='description'><a href="https://avanos.com/">Avanos.com a WordPress site</a> I helped maintain and provide new features for Avanos, and it&apos;s associated sibling sites, including Avanos.co.uk, which hosts several translated versions of the site. I also was the team lead for a new redisgn of the site, which is set to launch in the near future, developing the site from the ground up with a modern custom theme.</p></li>
            <li><p className='description'><a href="https://rhonda-haran.com/">Rhonda-haran.com</a> is one of half a dozen realty based WordPress sites I helped to develop and maintain. Using our in house IDK system to pull FMLS data, I assisted with the development of some of the frontend features, such as the <a href="https://rhonda-haran.com/property-search/">Map Search feature.</a></p></li>
            <li><p className='description'>I also created an in house tool that I named Project Zelena, which allows our team to look up and re-import FMLS listings into our DB. It uses React and gPRC to communicate to a go backend. Unfortunately, it&apos;s private, so I can&apos;t link the repo.</p></li>
            <li><p className='description'>Various other work includes maintaining dozens of other WordPress sites, Civic CRM, a Headless Next with WordPress as a CMS (in this project I had to port legacy Marketo form code to work with the new Next frontend), a React student/educator dashboard for a Robotics lab, improvements to our in-house theme involving updating scss, gulp, webpack, docker, and more. More WordPress work involved moving WordPress sites from one nginx server to another, resolving plugin conflicts, theme development, porting legacy WordPress sites to newer php and wp versions, etc.</p></li>
          </ul>
        <h3 className='portfolio-github--link'>
          <Link href='https://github.com/SilasCundiff/SilasCundiff.com'>
            Follow my Github for updates on my rebuild!
          </Link>
        </h3>
        </div>
      </section>
      <div className='wrapper'>
        <ProjectOldPortfolio />
        <ProjectCuisineQuest />
        <ProjectZenify />
      </div>
      <Divider>
        
      </Divider>
    </StyledProjects>
  );
}

export default Projects;
