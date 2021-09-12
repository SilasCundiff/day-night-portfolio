import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: 'Poppins';
    background: ${({ theme: { primary } }) => primary};
    color: ${({ theme: { text } }) => text};
    scroll-behavior: smooth;
  }
  body {
    /* overflow-x: hidden;
    min-height: 100vh;
    min-width: 100vw;
    display: flex; */
  }

  h1, h2, h3, h4 {
    font-weight: ${({ theme: { bold } }) => bold};
    line-height: .9;
  }
  h1, h2 {
    /* font-size: calc(48px + (96 - 48) * ((100vw - 300px) / (1920 - 300))); */
    font-size: clamp(2.4rem, 5vw, 10rem);
    color: ${({ theme: { primary } }) => primary};
  }
  h3, h4 {
    color: ${({ theme: { secondary } }) => secondary};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button, label {
    font-weight: ${({ theme: { bold } }) => bold};
  }
  ::selection {
    background: ${({ theme: { secondary } }) => secondary};
    color: ${({ theme: { text } }) => text};
  }

`;
