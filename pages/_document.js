import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
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
        </Head>
        <body>
          <Main />
          {/* <script type="text/javascript" id="zsiqchat">
            var $zoho=$zoho || { };
            $zoho.salesiq = $zoho.salesiq || { widgetcode: "siqd802d9d0f485dfaac340ddc20306f3d11ecdc5f9d155bc34c062992d6745a323", values:{ },ready:function(){ }};
            var d=document;
            s=d.createElement("script");
            s.type="text/javascript";
            s.id="zsiqscript";
            s.defer=true;
            s.src="https://salesiq.zohopublic.com/widget";
            t=d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s,t);
          </script> */}
          <script type="text/javascript" src="https://salesiq.zohopublic.com/widget" defer={true} id="zsiqscript"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}
