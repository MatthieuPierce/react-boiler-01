import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${ normalize }
  
  body {
    /* margin: 0;
    padding: 0; */
    --primary-color: #101820;
    --secondary-color: white;
    /* --secondary-color: #e2efd8; */
    background-color: var(--secondary-color);
    box-sizing: border-box;
    color: var(--primary-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
`;

