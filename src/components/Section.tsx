import type { ReactNode } from "react";

type Props = {
  id: string;
  titulo: string;
  introducao?: string;
  /** Fundo alternado para separar as seções visualmente */
  tom?: "escuro" | "medio";
  children: ReactNode;
};

/** Estrutura padrão de seção: <section> com título (h2) ligado via aria-labelledby. */
export function Section({ id, titulo, introducao, tom = "escuro", children }: Props) {
  const fundo = tom === "medio" ? "bg-terra-900" : "bg-terra-950";
  const tituloId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={tituloId}
      className={`${fundo} border-t border-terra-800 py-16 md:py-24`}
    >
      <div className="mx-auto max-w-5xl px-5">
        <header className="mb-10 max-w-2xl md:mb-14">
          <h2 id={tituloId} className="font-serif text-3xl leading-tight text-creme md:text-5xl">
            {titulo}
          </h2>
          {introducao && (
            <p className="mt-4 text-lg text-creme-suave">{introducao}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
