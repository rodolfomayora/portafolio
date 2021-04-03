import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Rodolfo Mayora Pereda, Front-End Developer" />
          <meta name="keywords" content="rodolfo, mayora, pereda, Fontend, developer, web" />
          <meta name="theme-color" content="hsla(0deg, 0%, 0%, 0)" />
          <link rel="icon" href="/favicon.ico" />
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