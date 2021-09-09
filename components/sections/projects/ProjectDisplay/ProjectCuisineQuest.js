import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/reusables/Buttons/Button';
import Container from '@/components/reusables/Container';
import Link from 'next/link';

const StyledProjectCuisineQuest = styled.div``;

function ProjectCuisineQuest() {
  return (
    <StyledProjectCuisineQuest>
      <Container>
        <Display>
          <Display.Header>
            <Display.Title>CuisineQuest</Display.Title>
            <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
          </Display.Header>
          <Display.Images>
            <Display.DesktopImage>
              <Image
                src='/images/cuisinequest-desktop.png'
                alt='cuisinequest desktop sceenshot'
                width={1920}
                height={1080}
                layout='responsive'
              />
            </Display.DesktopImage>
            <Display.MobileImage>
              <Image
                src='/images/cuisinequest-mobile.png'
                alt='cuisinequest mobile sceenshot'
                width={620}
                height={1100}
                layout='responsive'
              />
            </Display.MobileImage>
          </Display.Images>
          <Display.Footer>
            <Display.Description>
              A recipe search app with mongoDB.
            </Display.Description>
            <Display.ButtonContainer>
              <Button>
                <Link href='https://cuisinequest.app/'>Live Demo</Link>
              </Button>
              <Button ghost>
                <Link href='https://github.com/SilasCundiff/cuisinequest/tree/V2'>
                  View on github
                </Link>
              </Button>
            </Display.ButtonContainer>
          </Display.Footer>
        </Display>
      </Container>
    </StyledProjectCuisineQuest>
  );
}

export { ProjectCuisineQuest };
