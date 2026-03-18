/**
 * convert-slides.mjs
 * Converte cada arquivo HTML de slide em um componente TSX React.
 *
 * Uso: node scripts/convert-slides.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const slidesDir = join(rootDir, "public", "slides");
const outDir = join(rootDir, "components", "slides");

mkdirSync(outDir, { recursive: true });

const orderedFiles = [
  "index.html",
  "slide2.html",
  "slide3.html",
  "slide4.html",
  "slide5.html",
  "slide6.html",
  "slide7.html",
  "slide8.html",
  "slide9.html",
  "slide10.html",
  "slide11.html",
  "slide12.html",
  "slide13.html",
  "slide14.html",
  "slide15.html",
];

/** Converte um nome de propriedade CSS kebab-case para camelCase JS */
function cssPropToCamel(prop) {
  return prop
    .trim()
    .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/** Converte um valor CSS para uma string de valor JS válida */
function cssValueToJs(value) {
  value = value.trim();
  // Entidades já foram decodificadas no styleStringToJsx; apenas garante limpeza residual
  value = value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  // Se o valor contém aspas duplas, envolve em aspas simples
  if (value.includes('"')) {
    return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
  }
  return `"${value}"`;
}

/**
 * Converte um bloco de CSS inline (string) em um objeto JSX.
 *  "position: absolute; left: 80px; top: 60px;"
 *  → { position: "absolute", left: "80px", top: "60px" }
 */
function styleStringToJsx(styleStr) {
  // Remove quebras de linha e espaços extras
  styleStr = styleStr.replace(/\s+/g, " ").trim();
  // Decodifica &quot; ANTES de dividir por ";" para evitar splits falsos
  // (pois &quot; contém ponto-e-vírgula na entidade HTML)
  styleStr = styleStr.replace(/&quot;/g, '"').replace(/&amp;/g, "&");

  const declarations = styleStr.split(";").map((d) => d.trim()).filter(Boolean);
  const pairs = declarations.map((decl) => {
    const colonIdx = decl.indexOf(":");
    if (colonIdx === -1) return null;
    const prop = cssPropToCamel(decl.slice(0, colonIdx));
    const val = cssValueToJs(decl.slice(colonIdx + 1));
    return `${prop}: ${val}`;
  }).filter(Boolean);

  return `{{ ${pairs.join(", ")} }}`;
}

/**
 * Renomeia atributos HTML para JSX:
 *   class → className
 *   for → htmlFor
 *   crossorigin → crossOrigin
 *   tabindex → tabIndex
 *   colspan → colSpan
 */
function renameAttrs(tag) {
  return tag
    .replace(/\bclass=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=")
    .replace(/\bcrossorigin=/gi, "crossOrigin=")
    .replace(/\btabindex=/gi, "tabIndex=")
    .replace(/\bcolspan=/gi, "colSpan=")
    .replace(/\browspan=/gi, "rowSpan=")
    .replace(/\bstroke-width=/gi, "strokeWidth=")
    .replace(/\bfill-rule=/gi, "fillRule=")
    .replace(/\bclip-rule=/gi, "clipRule=");
}

/**
 * Converte todos os style="..." em style={{ ... }} dentro de um bloco HTML.
 * Usa uma máquina de estados simples para lidar com múltiplas linhas.
 */
function convertStyles(html) {
  // Encontra style="..." mesmo com quebras de linha dentro
  return html.replace(/style="([\s\S]*?)"/gm, (match, styleContent) => {
    return `style=${styleStringToJsx(styleContent)}`;
  });
}

/**
 * Converte void elements para self-closing JSX quando estão vazios.
 * Ex: <br> → <br />,  <img ...> → <img ... />
 */
function selfCloseVoidElements(html) {
  const voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
  const pattern = new RegExp(`<(${voidTags.join("|")})(\\s[^>]*)?>(?!</)`, "gi");
  return html.replace(pattern, (match, tag, attrs) => {
    // Se já termina com /, não mexe
    if (match.endsWith("/>")) return match;
    const inner = attrs ? attrs.trimEnd() : "";
    return `<${tag}${inner} />`;
  });
}

/**
 * Decodifica entidades HTML no texto (fora de atributos).
 * Feito de forma conservadora para não quebrar strings JSX já geradas.
 */
function decodeHtmlEntities(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, "\u00a0")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
  // Não decodificamos &quot; aqui pois já foi tratado nos valores de estilo.
  // Fora de atributos style, &quot; dentro de texto vira apenas "
}

/** Decodifica &quot; que aparecem como texto dentro de elementos */
function decodeQuotEntities(html) {
  // Somente substituir &quot; que estão fora de atributos (contexto de texto)
  // Para simplificar, tratamos todo &quot; restante
  return html.replace(/&quot;/g, '"');
}

/**
 * Extrai o conteúdo do <div class="slide-container"> (com o próprio div)
 * usando matching de delimitadores (não regex puro de HTML aninhado).
 */
function extractSlideContainer(html) {
  const startMarker = 'class="slide-container"';
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) return html;

  // Recua até o '<' anterior
  let openStart = startIdx;
  while (openStart > 0 && html[openStart] !== "<") openStart--;

  // Avança até fechar a tag de abertura '>'
  let tagEnd = startIdx;
  while (tagEnd < html.length && html[tagEnd] !== ">") tagEnd++;
  tagEnd++; // inclui o '>'

  // Encontra o </div> correspondente rastreando apenas abertura/fechamento de divs.
  // Outros elementos (p, ul, li, i, img, etc.) são ignorados pelo contador.
  let depth = 1;
  let i = tagEnd;
  while (i < html.length && depth > 0) {
    if (html[i] === "<") {
      if (html.slice(i, i + 2) === "</") {
        // Tag de fechamento — decrementa apenas para </div>
        const closeEnd = html.indexOf(">", i);
        if (closeEnd !== -1) {
          const tagName = html.slice(i + 2, closeEnd).trim().split(/\s/)[0].toLowerCase();
          if (tagName === "div") depth--;
          i = closeEnd + 1;
          continue;
        }
      } else {
        // Tag de abertura — incrementa apenas para <div (não para img, p, ul, etc.)
        // Precisa pular o atributo style que pode conter ">" escapado;
        // por segurança avançamos até o ">" desta tag ignorando conteúdo de atributos.
        const closeEnd = html.indexOf(">", i);
        if (closeEnd !== -1) {
          const inner = html.slice(i + 1, closeEnd);
          const tagName = inner.trim().split(/\s/)[0].toLowerCase();
          // Só conta abertura de <div> (e ignora self-closing <div />)
          if (tagName === "div" && !inner.trimEnd().endsWith("/")) {
            depth++;
          }
          i = closeEnd + 1;
          continue;
        }
      }
    }
    i++;
  }

  return html.slice(openStart, i);
}

/**
 * Gera o nome do componente a partir do nome do arquivo.
 * index.html → Slide1, slide2.html → Slide2, etc.
 */
function fileToComponentName(file) {
  const base = file.replace(".html", "");
  if (base === "index") return "Slide1";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

/**
 * Converte o comentário HTML <!-- ... --> para {/* ... *\/} no JSX.
 */
function convertComments(html) {
  return html.replace(/<!--([\s\S]*?)-->/g, (_, content) => {
    const safe = content.replace(/\*\//g, "* /");
    return `{/*${safe}*/}`;
  });
}

/**
 * Remove os comentários JSX gerados para simplificar o código final.
 * Opcional – comentado para preservar a documentação dos slides.
 */
// function stripComments(html) {
//   return html.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
// }

/**
 * Pipeline completo de conversão de um bloco HTML para JSX.
 */
function htmlToJsx(html) {
  // 1. Extrai apenas o slide-container
  let jsx = extractSlideContainer(html);
  // 2. Converte style="..." → style={{ ... }}
  jsx = convertStyles(jsx);
  // 3. Renomeia atributos HTML para JSX
  jsx = renameAttrs(jsx);
  // 4. Self-closing de void elements
  jsx = selfCloseVoidElements(jsx);
  // 5. Converte comentários HTML para JSX
  jsx = convertComments(jsx);
  // 6. Decodifica entidades HTML restantes no texto
  jsx = decodeHtmlEntities(jsx);
  jsx = decodeQuotEntities(jsx);
  return jsx;
}

/**
 * Indenta um bloco JSX com 2 espaços base para encaixar dentro do return().
 */
function indentJsx(jsx, baseIndent = "  ") {
  return jsx
    .split("\n")
    .map((line) => `${baseIndent}${line}`)
    .join("\n");
}

// ─── Processamento principal ─────────────────────────────────────────────────

const indexEntries = []; // Para gerar o arquivo index.ts

for (const file of orderedFiles) {
  const filePath = join(slidesDir, file);
  let html;
  try {
    html = readFileSync(filePath, "utf-8");
  } catch (e) {
    console.warn(`Arquivo não encontrado: ${file} — pulando.`);
    continue;
  }

  // Extrai o título
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : file.replace(".html", "");

  const componentName = fileToComponentName(file);
  const jsx = htmlToJsx(html);
  const indented = indentJsx(jsx, "    ");

  const tsxContent = `export const title = "${title.replace(/"/g, '\\"')}";

export default function ${componentName}() {
  return (
${indented}
  );
}
`;

  const outFile = join(outDir, `${componentName}.tsx`);
  writeFileSync(outFile, tsxContent, "utf-8");
  console.log(`✓ ${file} → components/slides/${componentName}.tsx  [${title}]`);

  indexEntries.push({ componentName, title });
}

// Gera o arquivo de barrel index.ts
const barrelLines = [
  "// Exportações automáticas dos slides — gerado por scripts/convert-slides.mjs",
  "",
];

for (const { componentName, title } of indexEntries) {
  barrelLines.push(`export { default as ${componentName}, title as ${componentName}Title } from "./${componentName}";`);
}

barrelLines.push("");

const orderedSlides = indexEntries.map(({ componentName, title }) => ({
  id: componentName.toLowerCase(),
  title,
  componentName,
}));

barrelLines.push("export const SLIDES = [");
for (const slide of orderedSlides) {
  barrelLines.push(`  { id: "${slide.id}", title: "${slide.title.replace(/"/g, '\\"')}", componentName: "${slide.componentName}" },`);
}
barrelLines.push("] as const;");
barrelLines.push("");

writeFileSync(join(outDir, "index.ts"), barrelLines.join("\n"), "utf-8");
console.log("\n✓ components/slides/index.ts gerado");
console.log(`\nTotal: ${indexEntries.length} componentes criados em components/slides/`);
