import styled from 'styled-components';
import Display from './Display';
import Image from 'next/image';
import Button from '@/components/reusables/Buttons/Button';

const StyledProjectCuisineQuest = styled.div``;

function ProjectCuisineQuest() {
  return (
    <StyledProjectCuisineQuest>
      <Display>
        <Display.Header>
          <Display.Title>CuisineQuest</Display.Title>
          <Display.Role>Full-Stack Developer • UI Designer</Display.Role>
        </Display.Header>
        <Display.Images>
          <Display.DesktopImage>
            <Image
              src='/images/cuisinequest_desktop.png'
              alt='cuisinequest desktop sceenshot'
              width={1920}
              height={1080}
              layout='responsive'
            />
          </Display.DesktopImage>
          <Display.MobileImage>
            <Image
              src='/images/cuisinequest_mobile.png'
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
            <Button>Live Demo</Button>
            <Button ghost>View on github</Button>
          </Display.ButtonContainer>
        </Display.Footer>
      </Display>
    </StyledProjectCuisineQuest>
  );
}

export { ProjectCuisineQuest };
