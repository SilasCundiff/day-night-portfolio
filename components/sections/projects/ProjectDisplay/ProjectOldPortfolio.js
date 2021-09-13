import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/general/Buttons/Button';
import Container from '@/components/general/Container';
import Link from 'next/link';
const StyledProjectOldPortfolio = styled.div`
  .oldPortfolio__container {
    margin: 0 5vw 0 auto;
  }
`;

function ProjectOldPortfolio() {
  return (
    <StyledProjectOldPortfolio>
      <Container className='oldPortfolio__container'>
        <Display>
          <Display.Header>
            <Display.Title>Old Portfolio</Display.Title>
            <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
          </Display.Header>
          <Display.Images>
            <Display.DesktopImage>
              <Image
                lazyBoundary={'1600px'}
                src='/images/silvanusdesigns-desktop.png'
                alt='silvanusdesigns desktop sceenshot'
                width={1920}
                height={1080}
                layout='responsive'
              />
            </Display.DesktopImage>
            <Display.MobileImage>
              <Image
                lazyBoundary={'1600px'}
                src='/images/silvanusdesigns-mobile.png'
                alt='silvanusdesigns mobile sceenshot'
                width={620}
                height={1100}
                layout='responsive'
              />
            </Display.MobileImage>
          </Display.Images>
          <Display.Footer>
            <Display.Description>
              My previous portfolio. I wasn&apos;t satisfied with it.
            </Display.Description>
            <Display.ButtonContainer>
              <Button>
                <Link href='https://silvanusdesign.com/'>Live Demo</Link>
              </Button>
              <Button ghost className='project-btn'>
                <Link href='https://github.com/SilasCundiff/Silvanus-Designs/tree/refactor'>
                  View on github
                </Link>
              </Button>
            </Display.ButtonContainer>
          </Display.Footer>
        </Display>
      </Container>
    </StyledProjectOldPortfolio>
  );
}

export { ProjectOldPortfolio };
