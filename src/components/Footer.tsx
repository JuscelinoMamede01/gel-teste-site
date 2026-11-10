import { site } from "@/config/site";
import { crmTexto, isPlaceholder, nomeAutor } from "@/lib/format";

export function Footer() {
  const { rodape, autor, emailContato } = site;
  // Ano gerado no momento do build (o site é estático). Cada novo deploy atualiza.
  const ano = new Date().getFullYear();
  const crm = crmTexto();
  const temEmail = !isPlaceholder(emailContato);

  return (
    // pb extra no celular para a barra fixa de compra não cobrir o conteúdo
    <footer className="border-t border-terra-800 bg-terra-950 pt-12 pb-32 md:pb-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 text-sm text-creme-suave">
        <p className="rounded-xl border border-terra-700 p-4 text-base text-creme">
          {rodape.aviso}
        </p>

        {(crm || temEmail) && (
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            {/* Linha do autor: só aparece com o CRM preenchido */}
            {crm && (
              <p>
                <span className="font-semibold text-creme">{nomeAutor()}</span> · {autor.profissao}{" "}
                · {crm}
              </p>
            )}
            {/* Contato: só aparece com o e-mail preenchido */}
            {temEmail && (
              <p>
                {rodape.rotuloContato}:{" "}
                <a
                  href={`mailto:${emailContato}`}
                  className="text-broto underline underline-offset-4 hover:text-broto-claro"
                >
                  {emailContato}
                </a>
              </p>
            )}
          </div>
        )}

        <p>
          © {ano}. {rodape.direitos}
        </p>
      </div>
    </footer>
  );
}
