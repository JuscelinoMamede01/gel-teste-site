import Image from "next/image";
import { site } from "@/config/site";
import { nomeAutor } from "@/lib/format";
import { HERO_ID } from "@/lib/ids";
import { BuyButton } from "@/components/BuyButton";
import { LockIcon } from "@/components/icons";

export function Hero() {
  const { hero, capa } = site;

  return (
    <section
      id={HERO_ID}
      aria-labelledby="hero-titulo"
      className="relative isolate overflow-hidden"
    >
      {/* Brilho verde suave, como luz sobre o broto da capa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(124,211,79,0.13),transparent_70%)] md:bg-[radial-gradient(ellipse_50%_60%_at_75%_40%,rgba(124,211,79,0.12),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pt-10 pb-14 md:grid md:grid-cols-[1.15fr_0.85fr] md:grid-rows-[auto_auto] md:gap-x-12 md:gap-y-8 md:pt-20 md:pb-24 lg:gap-x-20">
        {/* Título e autor */}
        <div className="md:col-start-1 md:row-start-1 md:self-end">
          <p className="mb-5 inline-flex items-center rounded-full border border-terra-600 px-3 py-1 text-sm font-medium tracking-wide text-creme-suave">
            {hero.selo}
          </p>

          <p className="font-serif text-xl text-broto md:text-2xl">{hero.nomeProduto}</p>

          <h1
            id="hero-titulo"
            className="mt-3 font-serif text-[2.5rem] leading-[1.08] text-balance text-creme md:text-5xl lg:text-6xl"
          >
            {hero.titulo}
          </h1>

          <p className="mt-6 max-w-md text-lg text-creme md:text-xl">{hero.subtitulo}</p>

          <p className="mt-4 text-base text-creme-suave">
            {hero.prefixoAutor}{" "}
            <span className="font-semibold text-creme">{nomeAutor()}</span>
          </p>
        </div>

        {/* Capa */}
        <div className="flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:items-center">
          <div className="relative w-[62%] max-w-[260px] motion-safe:animate-entrada md:w-full md:max-w-[380px]">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-full bg-broto/10 blur-3xl"
            />
            <Image
              src={capa.src}
              alt={capa.alt}
              width={capa.largura}
              height={capa.altura}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 380px, 62vw"
              className="h-auto w-full rounded-md shadow-2xl shadow-black/60 ring-1 ring-white/10"
            />
          </div>
        </div>

        {/* Preço e compra */}
        <div className="flex flex-col items-start gap-5 md:col-start-1 md:row-start-2">
          <div className="flex w-full flex-col items-start gap-3">
            <BuyButton origem="hero">{hero.textoBotao}</BuyButton>
            <p className="flex items-center gap-2 text-sm text-creme-suave">
              <LockIcon className="h-4 w-4 shrink-0 text-broto" />
              {hero.linhaPagamento}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
