import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="hsla(0deg, 0%, 0%, 0)" />
          <meta name="thumbnail" content="/thumbnail.png" />
          <link rel="icon" href="/favicon2.ico" />
          <meta name="color-scheme" content="only light" />
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