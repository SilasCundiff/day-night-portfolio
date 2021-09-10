import styled from 'styled-components';
import CurvedSVG from '@/components/reusables/CurvedSVG';
import Container from '@/components/reusables/Container';
import { useDayModeContext } from '@/contexts/DayModeContext';
import { Parallax } from 'react-scroll-parallax';
import { isBrowser } from 'react-device-detect';
const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;

  h2 {
    max-width: 400px;
  }

  h3 {
    font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1920 - 300)));
    margin-bottom: 1rem;
  }

  .about__header {
    margin-top: 45vh;
    margin-bottom: 10vh;
    width: 80%;
  }
  .about__excerpt {
    max-width: 90vw;
    padding: 1%;
    font-size: calc(20px + (20 - 16) * ((100vw - 300px) / (1920 - 300)));
  }
  .about__excerpt__content {
    line-height: 1.65rem;
    margin-bottom: 1.65rem;
  }
  .about__excerpt--introduction {
    margin-bottom: 45vh;
  }
  .about__excerpt--flavor {
    margin-bottom: 15vh;
  }
  .about__excerpt--introduction,
  .about__excerpt--introduction .about__excerpt__header {
    color: ${({ theme: { primary } }) => primary};
  }
  .about__header.nightModeStyle {
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .nightModeStyle .about__excerpt--introduction .about__excerpt__header {
    color: ${({ theme: { secondary } }) => secondary};
  }
  .nightModeStyle .about__excerpt--introduction {
    color: ${({ theme: { text } }) => text};
  }
  @media only screen and (min-width: 600px) {
    .about__header {
      margin-top: 35vh;
    }
  }
  @media only screen and (min-width: 1280px) {
    .about__header {
      margin-inline: auto;
    }
    h2 {
      max-width: 780px;
    }

    .about__container {
      display: flex;
      .about__excerpt {
        flex: 1 1 100%;
        margin-top: 0;
        padding: 3%;
      }
      .about__excerpt--introduction,
      .about__excerpt--flavor {
        margin-bottom: 15vh;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .about__header {
      margin-top: 28vh;
    }
  }
  @media only screen and (min-width: 1920px) {
    h2 {
      max-width: 600px;
    }
    .about__container {
      justify-content: space-between;
      .about__excerpt {
        padding: 2% 5%;
      }
    }
    .about__header {
      margin: 43vh 0 5vh;
      padding: 0 5%;
      background: ${({ theme: { gradient } }) => gradient};
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
    }
    .about__excerpt {
      padding: 0 5%;
      margin-top: 15vh;
    }
    .about__excerpt--introduction,
    .about__excerpt--introduction .about__excerpt__header {
      color: ${({ theme: { secondary } }) => secondary};
      & p {
        color: ${({ theme: { text } }) => text};
      }
    }
    .about__excerpt .about__excerpt__header--flavor {
      color: ${({ theme: { primary } }) => primary};
    }

    .about__excerpt--flavor .about__excerpt__content {
      color: ${({ theme: { primary } }) => primary};
    }
    .about__excerpt--skills {
      margin-bottom: 50vh;
    }
    .nightModeStyle .about__excerpt .about__excerpt__header--flavor {
      color: ${({ theme: { secondary } }) => secondary};
    }

    .nightModeStyle .about__excerpt--flavor .about__excerpt__content {
      color: ${({ theme: { text } }) => text};
    }
  }
  @media only screen and (min-width: 1950px) {
    .about__header {
      margin: 50vh 0 5vh;
    }
  }
  .dreams--outer__container {
    position: absolute;
    top: 25%;
    left: 0;
    z-index: -1;
    @media only screen and (min-width: 1280px) {
      width: 100%;
    }
  }
  .designs--outer__container {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    @media only screen and (min-width: 1280px) {
      width: 100%;
    }
  }
  .dreams__container {
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.6;
    height: 1200px;
    font-weight: 900;
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .designs__container {
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.6;
    font-weight: 900;
    height: 1200px;
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .dreams,
  .designs {
    font-size: 18rem;
    overflow: hidden;
    margin-bottom: 4rem;
    @media only screen and (min-width: 1280px) {
      font-size: 16rem;
      margin-bottom: 2rem;
    }
  }
  .intodesigns,
  .intoreality {
    font-size: 9rem;
    padding-left: 0.5rem;
    overflow: hidden;
    @media only screen and (min-width: 1280px) {
      font-size: 8rem;
    }
  }
  .parallax-inner {
    height: 100%;
  }
`;
console.log('isBrowser :>> ', isBrowser);
let dreamsY = ['0px', '200px'];
let dreamsX = ['100%', '-105%'];
let intoDesignsX = ['-105%', '100%'];
let designsX = ['-205%', '100%'];
let designsY = ['0px', '200px'];
let intoRealityX = ['100%', '-255%'];
function About() {
  const { dayMode } = useDayModeContext();
  if (!isBrowser) {
    dreamsY = ['0px', '200px'];
    dreamsX = ['100%', '-105%'];
    intoDesignsX = ['-105%', '100%'];
    designsX = ['-205%', '100%'];
    designsY = ['0px', '200px'];
    intoRealityX = ['100%', '-255%'];
  }
  if (isBrowser) {
    dreamsY = ['0px', '500px'];
    dreamsX = ['50%', '10%'];
    intoDesignsX = ['-55%', '25%'];
    designsX = ['-205%', '10%'];
    designsY = ['0px', '600px'];
    intoRealityX = ['100%', '25%'];
  }
  return (
    <StyledAbout id='about'>
      <CurvedSVG />

      <div className='dreams--outer__container'>
        <div className='dreams__container'>
          <Parallax y={dreamsY}>
            <Parallax x={dreamsX}>
              <div className='dreams'>DREAMS</div>
            </Parallax>
            <Parallax x={intoDesignsX}>
              <div className='intodesigns'>INTO DESIGNS</div>
            </Parallax>
          </Parallax>
        </div>
      </div>
      <div className='designs--outer__container '>
        <div className='designs__container'>
          <Parallax y={designsY}>
            <Parallax x={designsX}>
              <div className='designs'>DESIGNS</div>
            </Parallax>
            <Parallax x={intoRealityX}>
              <div className='intoreality'>INTO REALITY</div>
            </Parallax>
          </Parallax>
        </div>
      </div>
      <Container>
        <h2 className={`about__header ${!dayMode ? 'nightModeStyle' : ''}`}>
          A little about me.
        </h2>
        <div className={`about__container ${!dayMode ? 'nightModeStyle' : ''}`}>
          <section className='about__excerpt about__excerpt--introduction'>
            <h3 className='about__excerpt__header'>Hey, I&apos;m Silas</h3>
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
            <h3 className='about__excerpt__header about__excerpt__header--flavor'>
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
          <h3 className='about__excerpt__header'>
            What I do, and how I do it.
          </h3>
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
