import { site } from "@/config/site";
import { Section } from "@/components/Section";

export function Contents() {
  const { titulo, introducao, topicos } = site.conteudo;

  return (
    <Section id="conteudo" titulo={titulo} introducao={introducao}>
      <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {topicos.map((topico, i) => (
          <li key={topico.titulo} className="flex gap-5 border-t border-terra-700 pt-6">
            <span
              aria-hidden="true"
              className="w-12 shrink-0 font-serif text-4xl leading-none text-broto tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl font-semibold text-creme">{topico.titulo}</h3>
              <p className="mt-2 text-creme-suave">{topico.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
