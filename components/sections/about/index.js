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
   font-family: 'Poppins', sans-serif;

  .header {
    font-size: clamp(3rem, 5vw, 10rem);
    padding: 1.25rem;
    margin-top: 15vw;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .about--container {
    margin-bottom: 30vh;
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
        // max-width: 40ch;
      }
    }
    .section {
      flex: 1 1 100%;
      padding: 1.25em;
      font-size: clamp(2rem, 2vw, 1.5rem);
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

const dreamsY = ['0px', '500px'];
const dreamsX = ['50%', '10%'];
const intoDesignsX = ['-55%', '25%'];
const designsX = ['-205%', '10%'];
const designsY = ['0px', '600px'];
const intoRealityX = ['100%', '25%'];

function About() {
  const { dayMode } = useDayModeContext();
  const { modalToggler, modalOpen } = useModalContext();

  return (
    <StyledAbout id='about'>
      <CurvedSVG />
      {isBrowser && (
        <div>
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
        </div>
      )}
      {!isBrowser && (
        <div>
          <div className='dreams--outer__container'>
            <div className='dreams__container'>
              <div className='dreams'>DREAMS</div>

              <div className='intodesigns'>INTO DESIGNS</div>
            </div>
          </div>
          <div className='designs--outer__container '>
            <div className='designs__container'>
              <div className='designs'>DESIGNS</div>
              <div className='intoreality'>INTO REALITY</div>
            </div>
          </div>
        </div>
      )}
      <Container className='about--container'>
        <h2 className={`header ${!dayMode ? 'nightModeStyle' : ''}`}>
          A little <br /> about me.
        </h2>
        <div className={`wrapper ${!dayMode ? 'nightModeStyle' : ''}`}>
          <section className='section introduction'>
            {/* <h3 className='section--header'>Hey, I&apos;m Silas</h3> */}
            <div className='section--content'>
              <p className='section--paragraph'>
                I love to design and develop websites that have unique and
                interesting concepts.
              </p>
              <p className='section--paragraph'>
                I&apos;m a full-stack developer and designer. I&apos;m
                passionate about creating projects that are both functional and
                beautiful.
              </p>
              <p className='section--paragraph'>
                Previously, I worked for a development studio called Polyglot labs, where I helped develop and maintain dozens of WordPress sites.
              </p>
            </div>
          </section>
        </div>
        <section className='section section--skills'>
          <h3 className='section--header'>My most loved tools and tech</h3>
          <div className='section--content'>
            <p className='section--paragraph'>
              My favorite stack is React in Next.js, with Tailwind or SCSS. Express is my most familiar backend framework, but I've gained experience with PHP and GoLang backends.
            </p>
            <p className='section--paragraph'>
              I love writing JavaScript and CSS, and I'm always looking for new ways to improve my skills.
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
