import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/general/Buttons/Button';
import Container from '@/components/general/Container';
import Link from 'next/link';

const StyledProjectZenify = styled.div`
  .zenify__container {
    margin: 0 5vw 0 auto;
  }
`;

function ProjectZenify() {
  return (
    <StyledProjectZenify className='project'>
      <Container className='zenify__container'>
        <Display>
          <Display.Header>
            <Display.Title>Zenify</Display.Title>
            <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
          </Display.Header>
          <Display.Images>
            <Display.DesktopImage>
              <Image
                lazyBoundary={'1600px'}
                src='/images/zenify-desktop.png'
                alt='zenify desktop sceenshot'
                width={1920}
                height={1080}
                layout='responsive'
              />
            </Display.DesktopImage>
            <Display.MobileImage>
              <Image
                lazyBoundary={'1600px'}
                src='/images/zenify-mobile.png'
                alt='zenify mobile sceenshot'
                width={620}
                height={1100}
                layout='responsive'
              />
            </Display.MobileImage>
          </Display.Images>
          <Display.Footer>
            <Display.Description>
              A Spotify powered audio visualizer.
            </Display.Description>
            <Display.ButtonContainer>
              <Button>
                <Link href='https://zenify-server.herokuapp.com/'>
                  Live Demo
                </Link>
              </Button>
              <Button ghost className='project-btn'>
                <Link href='https://github.com/SilasCundiff/zenify'>
                  View on github
                </Link>
              </Button>
            </Display.ButtonContainer>
          </Display.Footer>
        </Display>
      </Container>
    </StyledProjectZenify>
  );
}

export { ProjectZenify };
