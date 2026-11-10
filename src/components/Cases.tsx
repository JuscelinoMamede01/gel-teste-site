import { site } from "@/config/site";
import { filled } from "@/lib/format";
import { Section } from "@/components/Section";

/**
 * Casos: vêm de site.casos.lista (src/config/site.ts).
 * Devem ser aprovados pelo autor, totalmente anonimizados e sem promessa de resultado.
 */
export function Cases() {
  const {
    titulo,
    introducao,
    aviso,
    lista,
    rotuloSituacao,
    rotuloOQueAconteceu,
    rotuloAprendizado,
  } = site.casos;

  return (
    <Section id="casos" titulo={titulo} introducao={introducao} tom="medio">
      <ul className="flex flex-col gap-6">
        {lista.map((caso) => (
          <li key={caso.rotulo}>
            <article className="rounded-2xl border border-terra-700 bg-terra-800/60 p-6 md:grid md:grid-cols-[1fr_1.7fr] md:gap-10 md:p-10">
              <header>
                <p className="text-sm font-semibold tracking-widest text-broto uppercase">
                  {caso.rotulo}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug text-creme md:text-3xl">
                  {caso.titulo}
                </h3>
                <p className="mt-4 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full border border-terra-600 px-3 py-1 text-creme">
                    {caso.perfil}
                  </span>
                  {filled(caso.tema) && (
                    <span className="rounded-full bg-broto/15 px-3 py-1 text-broto">
                      {caso.tema}
                    </span>
                  )}
                </p>
              </header>

              <dl className="mt-6 flex flex-col gap-5 md:mt-0">
                <div>
                  <dt className="font-semibold text-creme">{rotuloSituacao}</dt>
                  <dd className="mt-1 text-creme-suave">{caso.situacao}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-creme">{rotuloOQueAconteceu}</dt>
                  <dd className="mt-1 text-creme-suave">{caso.oQueAconteceu}</dd>
                </div>
                <div className="border-l-4 border-broto pl-4">
                  <dt className="font-semibold text-broto">{rotuloAprendizado}</dt>
                  <dd className="mt-1 text-creme">{caso.aprendizado}</dd>
                </div>
              </dl>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl rounded-xl border border-terra-700 p-4 text-sm text-creme-suave">
        {aviso}
      </p>
    </Section>
  );
}
