import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 :root {
    --colorNeutral500: #9C9C9C;
    --colorNeutral600: #696969;
    --colorNeutral900: #0A2540;
    --colorNeutral200: #d1d5db;

    --colorLight100: #f6f6f6;
    --colorLight200: rgb(230, 233, 237);

    --purple: #AB82FB;

  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  } 

  input, p, span, button, h1 {
    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--colorNeutral900);
  }
`;
