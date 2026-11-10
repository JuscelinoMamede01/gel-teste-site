import { site } from "@/config/site";
import { isPlaceholder } from "@/lib/format";

/** True quando o link da Kiwify ainda não foi configurado em src/config/site.ts. */
export const checkoutIsPlaceholder = isPlaceholder(site.checkoutUrl);

/**
 * Junta os parâmetros da URL atual da página (utm_source, utm_medium,
 * utm_campaign, utm_content, utm_term, src, sck, fbclid etc.) ao link do
 * checkout da Kiwify.
 *
 * Parâmetros que JÁ existem no link da Kiwify são mantidos (nunca sobrescritos).
 */
export function buildCheckoutUrl(baseUrl: string, currentSearch: string): string {
  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return baseUrl;
  }

  const atuais = new URLSearchParams(currentSearch);
  atuais.forEach((valor, chave) => {
    if (!url.searchParams.has(chave)) {
      url.searchParams.append(chave, valor);
    }
  });

  return url.toString();
}
