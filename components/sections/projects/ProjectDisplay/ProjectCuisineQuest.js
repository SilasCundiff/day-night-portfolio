import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/general/Buttons/Button';
import Container from '@/components/general/Container';
import Link from 'next/link';

const StyledProjectCuisineQuest = styled.div`
  .cuisineQuest__container {
    margin: 0 5vw 0 auto;
  }
`;

function ProjectCuisineQuest() {
  return (
    <StyledProjectCuisineQuest className='project'>
      <Container className='cuisineQuest__container'>
        <Display>
          <Display.Header>
            <Display.Title>CuisineQuest</Display.Title>
            <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
          </Display.Header>
          <Display.Images>
            <Display.DesktopImage>
              <Image
                lazyBoundary={'1600px'}
                src='/images/cuisinequest-desktop.png'
                alt='cuisinequest desktop sceenshot'
                width={1920}
                height={1080}
                layout='responsive'
              />
            </Display.DesktopImage>
            <Display.MobileImage>
              <Image
                lazyBoundary={'1600px'}
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
              <Button ghost className='project-btn'>
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
