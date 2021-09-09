import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/reusables/Buttons/Button';
import Container from '@/components/reusables/Container';
import Link from 'next/link';

const StyledProjectZenify = styled.div``;

function ProjectZenify() {
  return (
    <StyledProjectZenify>
      <Container>
        <Display>
          <Display.Header>
            <Display.Title>Zenify</Display.Title>
            <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
          </Display.Header>
          <Display.Images>
            <Display.DesktopImage>
              <Image
                src='/images/zenify-desktop.png'
                alt='zenify desktop sceenshot'
                width={1920}
                height={1080}
                layout='responsive'
              />
            </Display.DesktopImage>
            <Display.MobileImage>
              <Image
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
              <Button ghost>
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
