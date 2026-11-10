import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { site } from "@/config/site";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
});

const ogImage = {
  url: site.capa.src,
  width: site.capa.largura,
  height: site.capa.altura,
  alt: site.capa.alt,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.urlDoSite),
  title: site.seo.titulo,
  description: site.seo.descricao,
  alternates: { canonical: "/" },
  authors: [{ name: `${site.autor.tratamento} ${site.autor.nome}` }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "O Manual da Fertilidade",
    title: site.seo.titulo,
    description: site.seo.descricao,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.titulo,
    description: site.seo.descricao,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#140d09",
  colorScheme: "dark",
  // Necessário para respeitar a "safe area" do iPhone na barra fixa inferior.
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: extensões do navegador (ColorZilla, Grammarly, tradutores)
    // injetam atributos em <html>/<body> antes do React carregar. Vale só para estes dois elementos.
    <html lang="pt-BR" className={`${inter.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <body className="bg-terra-950 font-sans text-creme" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
