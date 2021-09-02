import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: 'Poppins';
    background: ${({ theme: { primary } }) => primary};
    color: ${({ theme: { text } }) => text};
    
  }

`;
