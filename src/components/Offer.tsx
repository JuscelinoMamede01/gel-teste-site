import Image from "next/image";
import { site } from "@/config/site";
import { filled } from "@/lib/format";
import { OFERTA_ID, OFERTA_TITULO_ID } from "@/lib/ids";
import { BuyButton } from "@/components/BuyButton";
import { Price } from "@/components/Price";
import { CheckIcon, LockIcon, ShieldIcon } from "@/components/icons";

export function Offer() {
  const { oferta } = site;
  const temMockup = filled(oferta.mockup.src);

  return (
    <section
      id={OFERTA_ID}
      aria-labelledby={OFERTA_TITULO_ID}
      className="relative isolate overflow-hidden border-t border-terra-800 bg-terra-950 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(124,211,79,0.10),transparent_70%)]"
      />

      <div
        className={`mx-auto px-5 ${
          temMockup
            ? "flex max-w-5xl flex-col items-center gap-6 md:grid md:grid-cols-2 md:items-center md:gap-8"
            : "max-w-xl"
        }`}
      >
        {temMockup && (
          <Image
            src={oferta.mockup.src}
            alt={oferta.mockup.alt}
            width={oferta.mockup.largura}
            height={oferta.mockup.altura}
            loading="lazy"
            sizes="(min-width: 768px) 520px, 80vw"
            className="h-auto w-4/5 max-w-sm md:w-full md:max-w-none lg:w-[115%] md:justify-self-center"
          />
        )}

        <div className="w-full max-w-xl rounded-3xl border border-terra-700 bg-terra-900 p-6 shadow-2xl shadow-black/40 sm:p-10">
          <h2
            id={OFERTA_TITULO_ID}
            tabIndex={-1}
            className="text-center font-serif text-3xl leading-tight text-balance text-creme lg:text-4xl"
          >
            {oferta.titulo}
          </h2>

          <h3 className="mt-8 text-sm font-semibold tracking-widest text-creme-suave uppercase">
            {oferta.rotuloIncluso}
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {oferta.incluso.map((item) => (
              <li key={item} className="flex gap-3 text-creme">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-broto" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="my-8 border-t border-terra-700" />

          <p className="mb-3 text-center text-sm font-semibold tracking-widest text-creme-suave uppercase">
            {oferta.rotuloPreco}
          </p>
          <Price align="center" size="xl" />

          <div className="mt-8 flex flex-col items-center gap-3">
            <BuyButton origem="oferta" className="sm:w-full">
              {oferta.textoBotao}
            </BuyButton>
            <p className="flex items-center gap-2 text-center text-sm text-creme-suave">
              <LockIcon className="h-4 w-4 shrink-0 text-broto" />
              {oferta.linhaPagamento}
            </p>
          </div>

          <div className="mt-8 flex gap-4 rounded-2xl border border-terra-700 bg-terra-800/60 p-5">
            <ShieldIcon className="h-8 w-8 shrink-0 text-broto" />
            <div>
              <h3 className="font-semibold text-creme">{oferta.garantiaTitulo}</h3>
              <p className="mt-1 text-sm text-creme-suave">{oferta.garantiaTexto}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
