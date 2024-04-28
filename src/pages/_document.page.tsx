import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="rodolfo, mayora, pereda, FontEnd, Front-end, Developer, Desarrollador, Programador, Software, web, ReactJS, React, TypeScript, JavaScript" />
          <meta name="theme-color" content="hsla(0deg, 0%, 0%, 0)" />
          <meta name="thumbnail" content="/thumbnail.png" />
          <link rel="icon" href="/favicon2.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument