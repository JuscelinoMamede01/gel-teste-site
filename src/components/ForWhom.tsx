import { site } from "@/config/site";
import { Section } from "@/components/Section";
import { SproutIcon } from "@/components/icons";

export function ForWhom() {
  const { titulo, introducao, itens } = site.paraQuem;

  return (
    <Section id="para-quem" titulo={titulo} introducao={introducao}>
      <ul className="grid gap-4 md:grid-cols-3">
        {itens.map((item) => (
          <li
            key={item}
            className="flex gap-4 rounded-2xl border border-terra-700 bg-terra-800/60 p-5 md:flex-col md:p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-broto/15 text-broto">
              <SproutIcon className="h-5 w-5" />
            </span>
            <span className="text-lg leading-snug text-creme">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
