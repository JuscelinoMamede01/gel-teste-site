// Gera public/mockup.webp: a capa em um tablet e um celular, fundo transparente.
// Uso: npm run mockup  (refaz public/mockup.webp a partir de public/capa.jpg)
const path = require("path");
const fs = require("fs");
const projeto = path.resolve(__dirname, "..");
const sharp = require(path.join(projeto, "node_modules", "sharp"));

const capa = fs.readFileSync(path.join(projeto, "public", "capa.jpg")).toString("base64");
const img = `data:image/jpeg;base64,${capa}`;

const W = 1040;
const H = 1060;

// Tablet (retrato)
const t = { x: 60, y: 60, w: 600, h: 840, r: 44, b: 24 };
// Celular
const p = { x: 650, y: 320, w: 330, h: 660, r: 52, b: 13 };

function device(d, id, notch) {
  const sx = d.x + d.b, sy = d.y + d.b, sw = d.w - 2 * d.b, sh = d.h - 2 * d.b;
  const sr = Math.max(d.r - d.b, 8);
  return `
  <g filter="url(#sombra)">
    <rect x="${d.x}" y="${d.y}" width="${d.w}" height="${d.h}" rx="${d.r}" fill="#0b0b0c"/>
  </g>
  <rect x="${d.x + 1.5}" y="${d.y + 1.5}" width="${d.w - 3}" height="${d.h - 3}" rx="${d.r - 1}" fill="none" stroke="#3a3a3e" stroke-width="3"/>
  <clipPath id="${id}"><rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="${sr}"/></clipPath>
  <g clip-path="url(#${id})">
    <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="#141416"/>
    <image href="${img}" x="${sx}" y="${sy}" width="${sw}" height="${sh}" preserveAspectRatio="xMidYMid meet"/>
    <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" fill="url(#brilho)"/>
  </g>
  ${notch ? `<rect x="${d.x + d.w / 2 - 48}" y="${sy + 12}" width="96" height="26" rx="13" fill="#0b0b0c"/>` : `<circle cx="${d.x + d.w / 2}" cy="${d.y + d.b / 2}" r="4" fill="#26262a"/>`}
  `;
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <filter id="sombra" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#000" flood-opacity="0.55"/>
    </filter>
    <linearGradient id="brilho" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0.10"/>
      <stop offset="0.45" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  ${device(t, "telaTablet", false)}
  ${device(p, "telaCelular", true)}
</svg>`;

sharp(Buffer.from(svg))
  .webp({ quality: 82, alphaQuality: 90 })
  .toFile(path.join(projeto, "public", "mockup.webp"))
  .then((info) => console.log("ok", info.width + "x" + info.height, info.size + " bytes"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
