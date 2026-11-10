import Image from "next/image";
import { site } from "@/config/site";
import { crmTexto, filled, iniciais, nomeAutor } from "@/lib/format";
import { Section } from "@/components/Section";

export function Author() {
  const { autor, sobreAutor } = site;
  const nome = nomeAutor();

  // Credenciais só aparecem se o autor tiver CRM preenchido (médico de verdade).
  const crm = crmTexto();
  const registro = crm
    ? [
        filled(autor.profissao) ? autor.profissao : null,
        crm,
        filled(autor.especialidade) ? autor.especialidade : null,
        filled(autor.rqe) ? `${sobreAutor.rotuloRqe} ${autor.rqe}` : null,
      ].filter(Boolean)
    : [];

  return (
    <Section id="autor" titulo={sobreAutor.titulo}>
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <div className="shrink-0">
          {filled(autor.fotoUrl) ? (
            <Image
              src={autor.fotoUrl}
              alt={`Foto de ${nome}`}
              width={240}
              height={240}
              sizes="(min-width: 768px) 192px, 128px"
              className="h-32 w-32 rounded-full object-cover ring-2 ring-broto/60 md:h-48 md:w-48"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-32 w-32 items-center justify-center rounded-full bg-terra-800 font-serif text-5xl text-broto ring-2 ring-broto/60 md:h-48 md:w-48 md:text-7xl"
            >
              {iniciais(autor.nome)}
            </div>
          )}
        </div>

        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl text-creme md:text-4xl">{nome}</h3>
          {registro.length > 0 && (
            <p className="mt-2 text-base text-creme-suave">{registro.join(" · ")}</p>
          )}
          <div className="mt-6 flex flex-col gap-4 text-lg text-creme">
            {autor.bio.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
