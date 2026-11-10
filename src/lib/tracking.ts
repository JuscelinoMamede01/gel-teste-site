/**
 * Ponto único de rastreamento do clique em "Comprar".
 *
 * Chamado por <BuyButton /> imediatamente antes de abrir o checkout da Kiwify.
 *
 * Para ativar:
 * 1. Preencha site.analytics.metaPixelId e/ou site.analytics.googleAnalyticsId
 *    em src/config/site.ts.
 * 2. Descomente os scripts em src/components/Analytics.tsx.
 * 3. Descomente as linhas abaixo.
 *
 * Observação: a própria Kiwify também pode disparar o Pixel/GA dentro do
 * checkout (configurado no painel da Kiwify). O evento "InitiateCheckout"
 * aqui marca o clique na landing page.
 */

// declare global {
//   interface Window {
//     fbq?: (...args: unknown[]) => void;
//     gtag?: (...args: unknown[]) => void;
//   }
// }

export function trackInitiateCheckout(origem: string): void {
  // Útil para conferir no console durante o desenvolvimento.
  if (process.env.NODE_ENV !== "production") {
    console.info(`[tracking] InitiateCheckout (origem: ${origem})`);
  }

  // --- Meta Pixel -----------------------------------------------------------
  // window.fbq?.("track", "InitiateCheckout", { content_name: "O Manual da Fertilidade" });

  // --- Google Analytics 4 ---------------------------------------------------
  // window.gtag?.("event", "begin_checkout", { origem });
  // window.gtag?.("event", "InitiateCheckout", { origem });
}
