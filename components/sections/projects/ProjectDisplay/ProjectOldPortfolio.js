import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/reusables/Buttons/Button';
import Container from '@/components/reusables/Container';
import Link from 'next/link';
const StyledProjectOldPortfolio = styled.div``;

function ProjectOldPortfolio() {
  return (
    <StyledProjectOldPortfolio>
      <Container>
        <Display>
          <Display.Header>
            <Display.Title>Old Portfolio</Display.Title>
            <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
          </Display.Header>
          <Display.Images>
            <Display.DesktopImage>
              <Image
                src='/images/silvanusdesigns-desktop.png'
                alt='silvanusdesigns desktop sceenshot'
                width={1920}
                height={1080}
                layout='responsive'
              />
            </Display.DesktopImage>
            <Display.MobileImage>
              <Image
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
              My previous portfolio. It wasn&apos;t satisfied with it.
            </Display.Description>
            <Display.ButtonContainer>
              <Button>
                <Link href='https://silvanusdesign.com/'>Live Demo</Link>
              </Button>
              <Button ghost>
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
