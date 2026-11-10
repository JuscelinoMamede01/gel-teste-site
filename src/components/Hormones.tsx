import { site } from "@/config/site";
import { RichText } from "@/components/RichText";
import { SproutIcon } from "@/components/icons";

/** Seção para quem usa ou já usou hormônios/anabolizantes. Textos em site.hormonios. */
export function Hormones() {
  const { rotulo, titulo, paragrafos, fechamento } = site.hormonios;

  return (
    <section
      id="hormonios"
      aria-labelledby="hormonios-titulo"
      className="relative isolate overflow-hidden border-t border-terra-800 bg-terra-900 py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_0%_50%,rgba(124,211,79,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-3xl px-5">
        <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-broto uppercase">
          <SproutIcon className="h-5 w-5" />
          {rotulo}
        </p>
        <h2
          id="hormonios-titulo"
          className="mt-4 font-serif text-4xl leading-[1.1] text-creme md:text-6xl"
        >
          {titulo}
        </h2>

        <div className="mt-8 flex flex-col gap-5 text-lg text-creme-suave">
          {paragrafos.map((p) => (
            <p key={p}>
              <RichText texto={p} />
            </p>
          ))}
        </div>

        {fechamento && (
          <p className="mt-10 rounded-2xl border border-broto/40 bg-broto/10 p-6 font-serif text-2xl leading-snug text-creme md:p-8 md:text-3xl">
            <RichText texto={fechamento} strongClassName="font-normal text-broto" />
          </p>
        )}
      </div>
    </section>
  );
}
