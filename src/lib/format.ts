import { site } from "@/config/site";

/** True se o valor está vazio ou ainda contém um marcador de placeholder. */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value || !value.trim()) return true;
  return /\[PREENCHER|SEU-CODIGO/i.test(value);
}

/** True se o campo opcional foi preenchido (não vazio). */
export function filled(value: string | undefined | null): value is string {
  return !!value && value.trim().length > 0;
}

/** "CRM/SP 123456", ou null enquanto CRM/UF não forem preenchidos. */
export function crmTexto(): string | null {
  const { crm, uf } = site.autor;
  if (isPlaceholder(crm) || isPlaceholder(uf)) return null;
  return `CRM/${uf} ${crm}`;
}

/** "Dr. Rodrigo Zangriane" */
export function nomeAutor(): string {
  const { tratamento, nome } = site.autor;
  return filled(tratamento) ? `${tratamento} ${nome}` : nome;
}

/** Iniciais para o avatar quando não há foto: "RZ" */
export function iniciais(nome: string): string {
  const partes = nome.trim().split(/\s+/);
  const primeira = partes[0]?.[0] ?? "";
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
  return (primeira + ultima).toUpperCase();
}
