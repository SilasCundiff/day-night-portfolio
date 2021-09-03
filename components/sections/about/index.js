import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
import Container from '@/components/reusables/Container';
const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
  overflow-x: hidden;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  .about__header {
    margin-top: 33vh;
    margin-inline: auto;
    margin-bottom: 25vh;
    width: 75%;
  }
  .about__excerpt {
    max-width: 90vw;
    padding: 1%;
    margin-bottom: 15vh;
  }
  .about__excerpt__content {
    line-height: 1.65rem;
    margin-bottom: 1.65rem;
  }
`;

function About() {
  return (
    <StyledAbout>
      <CurvedSVG />
      <Container>
        <h2 className='about__header'>A little about me.</h2>
        <div className='about__container'>
          <section className='about__excerpt about__excerpt--introduction'>
            <h3 about__excerpt__header>Hey, I&apos;m Silas</h3>
            <p className='about__excerpt__content'>
              I love to design and develop websites that have unique and
              interesting concepts.
            </p>
            <p className='about__excerpt__content'>
              Whether it’s conforming to convention, or breaking the mould,
              Turning dreams into real designs is what I love to do.
            </p>
          </section>
          <section className='about__excerpt about__excerpt--flavor'>
            <h3 about__excerpt__header about__excerpt__header--flavor>
              My code philosophy
            </h3>
            <p className='about__excerpt__content'>
              While I have learned the basics of several coding languages, I
              believe mastery of one is greater than noviceship in many.{' '}
            </p>
            <p className='about__excerpt__content'>
              By focusing on JavaScript, React, and CSS, I have learned a lot
              about advanced concepts.
            </p>
            <p className='about__excerpt__content'>
              And Concepts are transferable.
            </p>
          </section>
        </div>
        <section className='about__excerpt about__excerpt--skills'>
          <h3 about__excerpt__header>What I do, and how I do it.</h3>
          <p className='about__excerpt__content'>
            I’m a full-stack developer and designer. From initial project idea
            and UX/UI design, to back-end implementation and problem solving, I
            want to be involved.
          </p>
          <p className='about__excerpt__content'>
            React has been my primary focus for over a year now, and I have
            worked on projects involving Redux, Mongo, Express, and more.
          </p>
          <p className='about__excerpt__content'>
            I have over two years of experience writing CSS, and I primarily
            work with SASS and Styled-components. I’m no stranger to frameworks
            such as Tailwind, Bulma, and Bootstrap to name a few. For animation,
            I use Framer-Motion and Lottie.
          </p>
          <p className='about__excerpt__content'>
            My designs are usually created in Figma, and a lot of the assets I
            use are created by myself in Adobe suite products such as
            Illustrator, Photoshop, or After Effects.
          </p>
          <div className='about__except--skills__icons'></div>
        </section>
      </Container>
    </StyledAbout>
  );
}

export default About;
