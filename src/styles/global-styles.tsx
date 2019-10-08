import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    touch-action: manipulation;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    list-style: none;
  }

  body {  
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
