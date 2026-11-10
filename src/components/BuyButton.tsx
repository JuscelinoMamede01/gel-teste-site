"use client";

import { useSyncExternalStore, type MouseEvent, type ReactNode } from "react";
import { site } from "@/config/site";
import { buildCheckoutUrl, checkoutIsPlaceholder } from "@/lib/checkout";
import { trackInitiateCheckout } from "@/lib/tracking";
import { OFERTA_ID, OFERTA_TITULO_ID } from "@/lib/ids";

// A query string da página não muda depois do carregamento,
// então não há nada para "assinar".
const subscribe = () => () => {};
const getSearch = () => window.location.search;
const getServerSearch = () => "";

type Props = {
  children: ReactNode;
  /** Identifica de onde veio o clique (hero, oferta, barra-mobile). Vai para o tracking. */
  origem: string;
  size?: "lg" | "sm";
  className?: string;
};

/**
 * Botão de compra único da página.
 * - Lê o link da Kiwify em src/config/site.ts.
 * - Repassa os parâmetros da URL atual (UTMs etc.) sem sobrescrever os do link.
 * - Se o link ainda for placeholder, rola até a oferta e avisa no console.
 */
export function BuyButton({ children, origem, size = "lg", className = "" }: Props) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);

  const href = checkoutIsPlaceholder
    ? `#${OFERTA_ID}`
    : buildCheckoutUrl(site.checkoutUrl, search);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (checkoutIsPlaceholder) {
      event.preventDefault();
      console.warn(
        "[BuyButton] checkoutUrl ainda é um placeholder. Configure o link da Kiwify em src/config/site.ts.",
      );
      const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById(OFERTA_ID)
        ?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
      document.getElementById(OFERTA_TITULO_ID)?.focus({ preventScroll: true });
      return;
    }

    trackInitiateCheckout(origem);
  }

  const tamanho =
    size === "lg"
      ? "min-h-14 px-8 text-lg w-full sm:w-auto"
      : "min-h-11 px-5 text-base";

  return (
    <a
      href={href}
      onClick={handleClick}
      data-origem={origem}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-broto font-semibold text-terra-950 shadow-lg shadow-black/30 transition-colors hover:bg-broto-claro focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-creme motion-reduce:transition-none ${tamanho} ${className}`}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-5 w-5 shrink-0"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.64l-4.22-4.22a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l4.22-4.22H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
