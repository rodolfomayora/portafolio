import { css } from "styled-components";

import { colors } from '../config';

export default css`
  html * {
    box-sizing: border-box;
    margin: 0;
    -webkit-tap-highlight-color: ${colors.transparent};
  }

  html,
  body {
    min-width: 320px;
    min-height: 100vh;
    overflow-X: hidden;
    background-color: ${colors.white2};
  }

  :root {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: ${colors.gray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  h6 {
    font-family: 'Poppins';
    font-weight: bold;
    color: ${colors.darkGray};
  }

  img,
  figure {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  abbr[title] { text-decoration: none; }

  strong { font-weight: bold; }
`;