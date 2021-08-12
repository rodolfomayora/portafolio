import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="rodolfo, mayora, pereda, FontEnd, Developer, Desarrollador, web, ReactJS, React" />
          <meta name="theme-color" content="hsla(0deg, 0%, 0%, 0)" />
          <link rel="icon" href="/favicon2.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument