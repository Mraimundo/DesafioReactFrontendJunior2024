import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${(props) => props.theme["bg"]};
    -webkit-font-smoothing: antialiased;
  }

  ul > li {
    list-style: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  body,
  input,
  textarea,
  button {
    font: 16px "Inter", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }
`;
