import { Fragment } from "react";

/**
 * Renderiza texto do config com destaques simples: **trecho** vira negrito.
 * Ex.: "Porque a fertilidade não é só da mulher. **É uma jornada do casal.**"
 */
export function RichText({
  texto,
  strongClassName = "font-semibold text-creme",
}: {
  texto: string;
  strongClassName?: string;
}) {
  const partes = texto.split("**");
  return (
    <>
      {partes.map((parte, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={strongClassName}>
            {parte}
          </strong>
        ) : (
          <Fragment key={i}>{parte}</Fragment>
        ),
      )}
    </>
  );
}
