import { Fragment } from "react";
import { site } from "@/config/site";
import { isPlaceholder } from "@/lib/format";
import { Section } from "@/components/Section";
import { PlusIcon } from "@/components/icons";

/**
 * Troca {email} na resposta por um link mailto para o e-mail de contato.
 * Enquanto o e-mail não estiver preenchido, usa o texto site.faq.semEmailContato.
 */
function Resposta({ texto }: { texto: string }) {
  const partes = texto.split("{email}");
  const temEmail = !isPlaceholder(site.emailContato);
  return (
    <>
      {partes.map((parte, i) => (
        <Fragment key={i}>
          {parte}
          {i < partes.length - 1 && !temEmail && site.faq.semEmailContato}
          {i < partes.length - 1 && temEmail && (
            <a
              href={`mailto:${site.emailContato}`}
              className="font-medium text-broto underline underline-offset-4 hover:text-broto-claro"
            >
              {site.emailContato}
            </a>
          )}
        </Fragment>
      ))}
    </>
  );
}

export function Faq() {
  const { titulo, perguntas } = site.faq;

  return (
    <Section id="perguntas" titulo={titulo} tom="medio">
      <div className="max-w-3xl divide-y divide-terra-700 border-y border-terra-700">
        {perguntas.map((item) => (
          <details key={item.pergunta} className="faq-item group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-lg font-semibold text-creme hover:text-broto-claro">
              <span>{item.pergunta}</span>
              <PlusIcon className="faq-icone h-5 w-5 shrink-0 text-broto transition-transform motion-reduce:transition-none" />
            </summary>
            <p className="pb-6 pr-8 text-creme-suave">
              <Resposta texto={item.resposta} />
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
