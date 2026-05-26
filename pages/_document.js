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

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.csmWidgetSettings = {
                  widgetId: "900edb70-b64d-4204-8c22-707b4c7d5336",
                  site: "one-atlas-jdkb.atlassian.net",
                  cloudId: "ceaca2eb-b3c0-4d39-9b74-531ec473bf10",
                }
              `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  if (typeof window.CSM === "undefined") {
                    var CSM = function(){CSM.__q__.push(arguments);};CSM.__q__=[];window.CSM=CSM;
                    var l = function() {var s = document.createElement('script');s.type="text/javascript";s.async=true;s.src="https://one-atlas-jdkb.atlassian.net/csm/widget/script.js?widgetId=900edb70-b64d-4204-8c22-707b4c7d5336&site=one-atlas-jdkb.atlassian.net&cloudId=ceaca2eb-b3c0-4d39-9b74-531ec473bf10";document.body.appendChild(s);}
                    if(document.readyState==="complete"){l();}else{window.addEventListener('load',l);}
                  }
                })()
              `,
            }}
          />

          {/* <script
            data-jsd-embedded
            data-key="b50c8cc2-fc35-4d76-bf22-f2059710a8d4"
            data-base-url="https://jsd-widget.atlassian.com"
            src="https://jsd-widget.atlassian.com/assets/embed.js"
          ></script> */}
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
