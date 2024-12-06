import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    --purple: #AB82FB;
  }

  body {
    background: ${({theme}) => theme.background};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  } 

  input, p, span, button, h1 {
    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({theme}) => theme.colorNeutral900};
  }
`;
