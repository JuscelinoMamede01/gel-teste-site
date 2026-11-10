// import Script from "next/script";
// import { site } from "@/config/site";

/**
 * PONTO PREPARADO PARA META PIXEL E GOOGLE ANALYTICS (desativado).
 *
 * Para ativar:
 * 1. Preencha site.analytics.metaPixelId e/ou site.analytics.googleAnalyticsId
 *    em src/config/site.ts.
 * 2. Descomente os imports acima e o bloco abaixo.
 * 3. Descomente as chamadas em src/lib/tracking.ts (evento "InitiateCheckout").
 *
 * LGPD: ao ativar rastreamento, avalie a necessidade de um aviso de cookies
 * e de mencionar o uso desses dados em uma política de privacidade.
 */
export function Analytics() {
  return null;

  // const { metaPixelId, googleAnalyticsId } = site.analytics;
  // return (
  //   <>
  //     {metaPixelId && (
  //       <Script id="meta-pixel" strategy="afterInteractive">
  //         {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //         n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  //         n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  //         t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  //         document,'script','https://connect.facebook.net/en_US/fbevents.js');
  //         fbq('init', '${metaPixelId}');
  //         fbq('track', 'PageView');`}
  //       </Script>
  //     )}
  //     {googleAnalyticsId && (
  //       <>
  //         <Script
  //           src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
  //           strategy="afterInteractive"
  //         />
  //         <Script id="ga4" strategy="afterInteractive">
  //           {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
  //           gtag('js', new Date());
  //           gtag('config', '${googleAnalyticsId}');`}
  //         </Script>
  //       </>
  //     )}
  //   </>
  // );
}
