import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: none;

  @media only screen and (min-width: 1920px) {
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    text-align: center;
  } ;
`;

function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

export default Footer;
