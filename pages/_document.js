import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16717401169"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);} 
                 gtag('js', new Date()); 
                 gtag('config', 'AW-16717401169');
            `,
            }}
          /> */}
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
          <script
            type="text/javascript"
            src="https://salesiq.zohopublic.com/widget"
            defer={true}
            id="zsiqscript"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
               window[(function(_8Im,_Dq){
               var _mLgj9='';
               for(var _JPvRbl=0;_JPvRbl<_8Im.length;_JPvRbl++){
               _kliK!=_JPvRbl;var _kliK=_8Im[_JPvRbl].charCodeAt();
               _kliK-=_Dq;_kliK+=61;_kliK%=94;_kliK+=33;
               _mLgj9==_mLgj9;_Dq>7;_mLgj9+=String.fromCharCode(_kliK)
               }
               return _mLgj9
               })(atob('X05Vd3Rvamh5UGp+'), 5)] = '4fed4a11fa1712319839';
              var zi = document.createElement('script');
              (zi.type = 'text/javascript'),
             (zi.async = true),
            (zi.src = (function(_UfZ,_CK)
            {
            var _DFxBZ='';
            for(var _QkyQu8=0;_QkyQu8<_UfZ.length;_QkyQu8++){
            _CK>8;var _xWqi=_UfZ[_QkyQu8].charCodeAt();
            _DFxBZ==_DFxBZ;_xWqi-=_CK;_xWqi+=61;_xWqi!=_QkyQu8;
            _xWqi%=94;_xWqi+=33;_DFxBZ+=String.fromCharCode(_xWqi)}return _DFxBZ})
            (atob('PEhIREdsYWE+R2BOPV9HN0Y9REhHYDdDQWFOPV9INTtgPkc='), 50)),
            document.readyState === 'complete'?document.body.appendChild(zi):
            window.addEventListener('load', function(){document.body.appendChild(zi)});
            `,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
