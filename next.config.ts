import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site 100% estático na pasta /out (sem servidor, sem backend).
  output: "export",
  images: {
    // Obrigatório no export estático: as imagens são servidas como estão.
    // Por isso, otimize o tamanho de public/capa.jpg antes de publicar.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
