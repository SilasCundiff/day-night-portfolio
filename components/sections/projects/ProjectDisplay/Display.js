import styled from 'styled-components';
import {
  Header,
  Images,
  Footer,
  Title,
  Role,
  DesktopImage,
  MobileImage,
  Description,
  ButtonContainer,
} from './DisplayComponents';

const StyledDisplay = styled.div`
  padding: 1rem;
  margin-bottom: 25vh;
`;

function Display({ children }) {
  return <StyledDisplay>{children}</StyledDisplay>;
}

Display.Header = Header;
Display.Images = Images;
Display.Footer = Footer;
Display.Title = Title;
Display.Role = Role;
Display.DesktopImage = DesktopImage;
Display.MobileImage = MobileImage;
Display.Description = Description;
Display.ButtonContainer = ButtonContainer;

export default Display;
