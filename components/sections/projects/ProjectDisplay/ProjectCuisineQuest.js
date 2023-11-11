import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/general/Buttons/Button';
import Container from '@/components/general/Container';
import Link from 'next/link';
// import SpeechBubble from '@/components/general/SpeechBubble/SpeechBubble';
import { useInView } from 'react-intersection-observer';

const StyledProjectCuisineQuest = styled.div`
  .cuisineQuest__container {
    margin: 0 5vw 0 auto;
  }
  position: relative;
  a {
    color: ${({ theme: { text } }) => text};
  }
`;

function ProjectCuisineQuest() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <StyledProjectCuisineQuest className='project' ref={ref}>
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
              A recipe search app with Spoonacular API.
            </Display.Description>
            <Display.ButtonContainer>
              <Button>
              Live demo coming soon
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
