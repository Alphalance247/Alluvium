import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
                });
            `,
            }}
          />
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>

          <script
            defer
            async
            src="//ukbrowserspeed.com/_k/t.js"
            data-public-key="pk_fd206eefacbe3bc36ef10b8742ef49b0"
          ></script>
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
