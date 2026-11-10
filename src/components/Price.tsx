import { site } from "@/config/site";
import { filled } from "@/lib/format";

type Props = {
  align?: "left" | "center";
  size?: "lg" | "xl";
};

const ALINHAMENTOS = {
  left: "items-start text-left",
  center: "items-center text-center",
};

/** Preço, preço antigo (opcional) e parcelamento (opcional), lidos do config. */
export function Price({ align = "left", size = "lg" }: Props) {
  const { preco, precoAntigo, precoParcelado } = site;
  const alinhamento = ALINHAMENTOS[align];
  const tamanhoPreco = size === "xl" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl";

  return (
    <div className={`flex flex-col gap-1 ${alinhamento}`}>
      {filled(precoAntigo) && (
        <p className="text-base text-creme-suave">
          <span className="sr-only">Preço anterior: </span>
          <del>{precoAntigo}</del>
        </p>
      )}
      <p className={`font-serif leading-none text-creme ${tamanhoPreco}`}>
        {filled(precoAntigo) && <span className="sr-only">Preço atual: </span>}
        {preco}
      </p>
      {filled(precoParcelado) && <p className="text-base text-creme-suave">{precoParcelado}</p>}
    </div>
  );
}
