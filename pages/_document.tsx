import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
           <title>Hello next</title>
        </Head>
        <body className="container mx-auto">
          <header>
            <div className="navbar container mx-auto w-full h-24 fixed inset-0 p-4 bg-blue-300"></div>
          </header>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument