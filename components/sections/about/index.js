import styled from 'styled-components';
import CurvedSVG from '@/components/general/CurvedSVG';
import Container from '@/components/general/Container';
import { useDayModeContext } from '@/contexts/DayModeContext';
import { useModalContext } from '@/contexts/ModalContext';
import { Parallax } from 'react-scroll-parallax';
import { isBrowser } from 'react-device-detect';
import Modal from '@/components/general/Modals/Modal';
import TabList from '@/components/general/TabList/TabList';
import Accordion from '@/components/general/Accordions/Accordion';
import { design, development, extras } from './skillsInfo';

const StyledAbout = styled.div`
  position: relative;
  overflow: hidden;

  .header {
    font-size: clamp(3rem, 5vw, 10rem);
    padding: 1.25rem;
    margin-top: 15vw;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .section {
    flex: 1 1 100%;
    padding: 1.25em;
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 12em;
    &--header {
      font-size: clamp(2rem, 2vw, 3rem);
      margin-bottom: 0.8em;
    }
    &--paragraph {
      line-height: 1.25em;
      margin-bottom: 1.25em;
    }
  }

  .introduction {
    margin-bottom: 10em;
  }
  .introduction,
  .introduction .section--header {
    color: ${({ theme: { primary } }) => primary};
  }
  .header.nightModeStyle {
    background: ${({ theme: { gradient } }) => gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .nightModeStyle .introduction .section--header {
    color: ${({ theme: { secondary } }) => secondary};
  }
  .nightModeStyle .introduction {
    color: ${({ theme: { text } }) => text};
  }
  .skills-list--link {
    color: ${({ theme: { secondary } }) => secondary};
    cursor: pointer;
    margin-top: 2em;
  }
  .certificates {
    color: ${({ theme: { secondary } }) => secondary};
    margin: 1.5rem 0 0;
  }

  @media only screen and (min-width: 600px) {
    .header {
      margin-top: 3vw;
    }
  }
  @media only screen and (min-width: 1280px) {
    .header {
      margin-top: 45vw;
      background: ${({ theme: { gradient } }) => gradient};
      background-clip: text;
      -webkit-background-clip: text;
      color: ${({ theme: { secondary } }) => secondary};
      color: transparent;
      margin-bottom: 1em;
    }
    .wrapper {
      display: flex;
      flex-direction: row;
      .section--paragraph {
        max-width: 40ch;
      }
    }
    .section {
      flex: 1 1 100%;
      padding: 1.25em;
      font-size: clamp(1rem, 2vw, 1.5rem);
      margin-bottom: 1em;
      &--header {
        font-size: clamp(2rem, 2vw, 3rem);
        margin-bottom: 0.8em;
      }
      &--paragraph {
        line-height: 1.25em;
        margin-bottom: 1.25em;
        color: ${({ theme: { text } }) => text};
      }
    }
    .philosophy {
      margin-left: 3em;
      .section--header {
        color: ${({ theme: { secondary } }) => secondary};
      }
      background-color: ${({ theme: { primary } }) => `${primary}99`};
      border-radius: 5px;
    }
    .introduction .section--header {
      color: ${({ theme: { secondary } }) => secondary};
    }
  }
  /* 
  
  @media only screen and (min-width: 1920px) {
    h2 {
      max-width: 600px;
    }
    .wrapper {
      justify-content: space-between;
      .section {
        padding: 2% 5%;
      }
    }
    .header {
      margin: 43vh 0 5vh;
      padding: 0 5%;
      background: ${({ theme: { gradient } }) => gradient};
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
    }
    .section {
      padding: 0 5%;
      margin-top: 15vh;
    }
    .introduction,
    .introduction .section--header {
      color: ${({ theme: { secondary } }) => secondary};
      & p {
        color: ${({ theme: { text } }) => text};
      }
    }
    .section .section--header--flavor {
      color: ${({ theme: { primary } }) => primary};
    }

    .philosophy .section--paragraph {
      color: ${({ theme: { primary } }) => primary};
    }
    .section--skills {
      margin-bottom: 50vh;
    }
    .nightModeStyle .section .section--header--flavor {
      color: ${({ theme: { secondary } }) => secondary};
    }

    .nightModeStyle .philosophy .section--paragraph {
      color: ${({ theme: { text } }) => text};
    }
  }
  @media only screen and (min-width: 1950px) {
    .header {
      margin: 50vh 0 5vh;
    }
  } */
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

let dreamsY = ['0px', '200px'];
let dreamsX = ['100%', '-105%'];
let intoDesignsX = ['-105%', '100%'];
let designsX = ['-205%', '100%'];
let designsY = ['0px', '200px'];
let intoRealityX = ['100%', '-255%'];

function About() {
  const { dayMode } = useDayModeContext();
  const { modalToggler, modalOpen } = useModalContext();

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
        <h2 className={`header ${!dayMode ? 'nightModeStyle' : ''}`}>
          A little <br /> about me.
        </h2>
        <div className={`wrapper ${!dayMode ? 'nightModeStyle' : ''}`}>
          <section className='section introduction'>
            <h3 className='section--header'>Hey, I&apos;m Silas</h3>
            <div className='section--content'>
              <p className='section--paragraph'>
                I love to design and develop websites that have unique and
                interesting concepts.
              </p>
              <p className='section--paragraph'>
                Whether it’s conforming to convention, or breaking the mould,
                Turning dreams into real designs is what I love to do.
              </p>
            </div>
          </section>
          <section className='section philosophy'>
            <h3 className='section--header section--header--philosophy'>
              My code philosophy
            </h3>
            <div className='section--content'>
              <p className='section--paragraph'>
                While I have learned the basics of several coding languages, I
                believe mastery of one is greater than noviceship in many.{' '}
              </p>
              <p className='section--paragraph'>
                By focusing on JavaScript, React, and CSS, I have learned a lot
                about advanced concepts.
              </p>
            </div>
          </section>
        </div>
        <section className='section section--skills'>
          <h3 className='section--header'>What I do, and how I do it.</h3>
          <div className='section--content'>
            <p className='section--paragraph'>
              I’m a full-stack developer and designer. From initial project idea
              and UX/UI design, to back-end implementation and problem solving,
              I want to be involved.
            </p>
            <p className='section--paragraph'>
              React has been my primary focus for over a year now, and I have
              worked on projects involving Redux, MongoDB/Mongoose, Express, and
              more.
            </p>
            <p className='section--paragraph'>
              I have over two years of experience writing CSS, and I primarily
              work with SASS and Styled-components. I’m no stranger to
              frameworks such as Tailwind, Bulma, and Bootstrap to name a few.
              For animation, I use Framer-Motion and Lottie.
            </p>
            <p className='section--paragraph'>
              My designs are usually created in Figma, and a lot of the assets I
              use are created by myself in Adobe suite products such as
              Illustrator, Photoshop, or After Effects.
            </p>
          </div>
          <div className='skills-list--link' onClick={modalToggler}>
            Click here for a full list of skills.
          </div>
          {modalOpen && (
            <Modal>
              <TabList>
                <TabList.TabsContainer>
                  <TabList.Tab id={0}>Design</TabList.Tab>
                  <TabList.Tab id={1}>Development</TabList.Tab>
                  <TabList.Tab id={2}>Extras</TabList.Tab>
                </TabList.TabsContainer>
                <TabList.PanelsContainer>
                  <TabList.Panel active={0}>
                    <Accordion>
                      {design.map(({ id, header, content, certificates }) => (
                        <Accordion.Item key={id}>
                          <Accordion.Header id={id}>{header}</Accordion.Header>
                          <Accordion.Content id={id}>
                            {content}
                            <div className='certificates'>
                              Learning Methods: {certificates}
                            </div>
                          </Accordion.Content>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </TabList.Panel>
                  <TabList.Panel active={1}>
                    <Accordion>
                      {development.map(
                        ({ id, header, content, certificates }) => (
                          <Accordion.Item key={id}>
                            <Accordion.Header id={id}>
                              {header}
                            </Accordion.Header>
                            <Accordion.Content id={id}>
                              {content}
                              <div className='certificates'>
                                Learning Methods: {certificates}
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                        )
                      )}
                    </Accordion>
                  </TabList.Panel>
                  <TabList.Panel active={2}>
                    <Accordion>
                      <Accordion.Title>
                        Here are skills I&apos;m certified in or experienced
                        with, that I don&apos;t use commonly, but could relearn
                        quickly if required.
                      </Accordion.Title>
                      {extras.map(({ id, header, content, certificates }) => (
                        <Accordion.Item key={id}>
                          <Accordion.Header id={id}>{header}</Accordion.Header>
                          <Accordion.Content id={id}>
                            {content}
                            <div className='certificates'>
                              Learning Methods: {certificates}
                            </div>
                          </Accordion.Content>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </TabList.Panel>
                </TabList.PanelsContainer>
              </TabList>
            </Modal>
          )}
        </section>
      </Container>
    </StyledAbout>
  );
}

export default About;
