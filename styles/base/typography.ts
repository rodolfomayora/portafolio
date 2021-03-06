import { css } from "styled-components";

const fontsPath: string = '/fonts/'
const poppinsPath: string = `${fontsPath}Poppins/`;
const openSansPath: string = `${fontsPath}OpenSans/`;

export default css`
  /* Popins
  ========================================*/
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src:
      url('${poppinsPath}poppins-v15-latin-300.woff') format('woff'),
      url('${poppinsPath}poppins-v15-latin-300.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src:
      url('${poppinsPath}poppins-v15-latin-regular.woff') format('woff'),
      url('${poppinsPath}poppins-v15-latin-regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src:
      url('${poppinsPath}poppins-v15-latin-800.woff') format('woff'),
      url('${poppinsPath}poppins-v15-latin-800.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    src:
      url('${poppinsPath}poppins-v15-latin-900.woff') format('woff'),
      url('${poppinsPath}poppins-v15-latin-900.ttf') format('truetype');
    font-display: swap;
  }

  /* Open Sans
  ========================================*/
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src:
      url('${openSansPath}open-sans-v18-latin-300.woff') format('woff'),
      url('${openSansPath}open-sans-v18-latin-300.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src:
      url('${openSansPath}open-sans-v18-latin-regular.woff') format('woff'),
      url('${openSansPath}open-sans-v18-latin-regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src:
      url('${openSansPath}open-sans-v18-latin-700.woff') format('woff'),
      url('${openSansPath}open-sans-v18-latin-700.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src:
      url('${openSansPath}open-sans-v18-latin-800.woff') format('woff'),
      url('${openSansPath}open-sans-v18-latin-800.ttf') format('truetype');
    font-display: swap;
  }
`;