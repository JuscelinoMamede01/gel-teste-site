import { site } from "@/config/site";
import { RichText } from "@/components/RichText";

/** Apresentação do livro, logo após o hero. Textos em site.apresentacao. */
export function Intro() {
  const { titulo, paragrafos, destaque, paragrafosFinais, chamada, textoBotao, destinoBotao } =
    site.apresentacao;
  const [abertura, ...resto] = paragrafos;

  return (
    <section
      id="apresentacao"
      aria-labelledby="apresentacao-titulo"
      className="border-t border-terra-800 bg-terra-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-5">
        <h2
          id="apresentacao-titulo"
          className="font-serif text-4xl leading-[1.1] text-creme md:text-6xl"
        >
          {titulo}
        </h2>

        {abertura && (
          <p className="mt-8 text-xl leading-relaxed text-creme md:text-2xl">
            <RichText texto={abertura} strongClassName="font-medium text-creme" />
          </p>
        )}

        <div className="mt-6 flex flex-col gap-5 text-lg text-creme-suave">
          {resto.map((p) => (
            <p key={p}>
              <RichText texto={p} />
            </p>
          ))}
        </div>

        {destaque && (
          <p className="my-10 border-l-4 border-broto py-1 pl-5 font-serif text-2xl leading-snug text-creme md:pl-7 md:text-4xl">
            <RichText texto={destaque} strongClassName="font-normal text-broto" />
          </p>
        )}

        <div className="flex flex-col gap-5 text-lg text-creme-suave">
          {paragrafosFinais.map((p) => (
            <p key={p}>
              <RichText texto={p} />
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-terra-700 bg-terra-800/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="text-lg md:max-w-md">
            <RichText texto={chamada} />
          </p>
          <a
            href={destinoBotao}
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full border-2 border-broto px-5 py-2 text-center text-sm md:w-auto font-semibold tracking-wider text-broto uppercase transition-colors hover:bg-broto hover:text-terra-950 motion-reduce:transition-none"
          >
            {textoBotao}
          </a>
        </div>
      </div>
    </section>
  );
}
