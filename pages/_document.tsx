import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
            rel="stylesheet"
          ></link>
          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                    const mode = localStorage.setItem("mode", "light"); 
                    if (mode === 'light')
                    {document.documentElement.classList.remove("dark")}
                    else {document.documentElement.classList.add("dark")}
  `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
