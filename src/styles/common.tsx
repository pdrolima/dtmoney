import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #f0f2f5;
      --red: #E52E40;
      --purple: #5429cc;
      --purple-light: #6933ff;
      --text-title: #363F5F;
      --text-body: #969CB3;
      --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      @media (max-width: 720px) {
          font-size: 0.875rem;
      }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
 }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
      cursor: pointer
  }

  [disabled] {
      cursor: not-allowed
  }

`;
