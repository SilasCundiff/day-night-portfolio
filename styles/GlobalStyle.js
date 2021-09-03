import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: 'Poppins';
    background: ${({ theme: { primary } }) => primary};
    color: ${({ theme: { text } }) => text};
  }
  h1, h2, h3, h4 {
    font-weight: ${({ theme: { bold } }) => bold};
    line-height: .9;
  }
  h1, h2 {
    font-size: 3rem;
    color: ${({ theme: { primary } }) => primary};
  }
  h3, h4 {
    color: ${({ theme: { secondary } }) => secondary};
  }

`;
