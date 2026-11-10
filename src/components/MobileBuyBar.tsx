"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { HERO_ID, OFERTA_ID } from "@/lib/ids";
import { BuyButton } from "@/components/BuyButton";

/**
 * Barra fixa de compra, só no celular.
 * Aparece quando o hero sai da tela e some enquanto a seção de oferta está visível.
 */
export function MobileBuyBar() {
  const [heroVisivel, setHeroVisivel] = useState(true);
  const [ofertaVisivel, setOfertaVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(HERO_ID);
    const oferta = document.getElementById(OFERTA_ID);
    if (!hero || !oferta || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroVisivel(entry.isIntersecting);
        if (entry.target === oferta) setOfertaVisivel(entry.isIntersecting);
      }
    });

    observer.observe(hero);
    observer.observe(oferta);
    return () => observer.disconnect();
  }, []);

  const visivel = !heroVisivel && !ofertaVisivel;

  return (
    <div
      inert={!visivel}
      aria-hidden={!visivel}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-terra-700 bg-terra-900/95 backdrop-blur-sm transition-transform duration-300 motion-reduce:transition-none md:hidden ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div
        className="py-3"
        style={{
          paddingLeft: "max(1.25rem, env(safe-area-inset-left, 0px))",
          paddingRight: "max(1.25rem, env(safe-area-inset-right, 0px))",
        }}
      >
        {/* Sem preço aqui: o preço aparece só na seção de oferta, no fim da página. */}
        <BuyButton origem="barra-mobile" size="sm" className="w-full">
          {site.barraMobile.textoBotao}
        </BuyButton>
      </div>
    </div>
  );
}
