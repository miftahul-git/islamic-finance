import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = resolve(projectRoot, 'src/app/finance/index.html');
const outputPath = resolve(projectRoot, 'src/index.html');

function expandIncludes(content, directory) {
  return content.replace(/@@include\("([^"]+)"(?:,\s*(\{[^}]*\}))?\)/g, (_, filename, data) => {
    const includePath = resolve(directory, filename);
    let included = readFileSync(includePath, 'utf8');
    included = expandIncludes(included, dirname(includePath));

    if (data) {
      for (const [key, value] of Object.entries(JSON.parse(data))) {
        included = included.replaceAll(`@@${key}`, value);
      }
    }

    return included;
  });
}

let html = expandIncludes(readFileSync(templatePath, 'utf8'), dirname(templatePath));
html = html.replaceAll('@@title', 'Hously');
html = html.replace(/\s*<link\b[^>]*assets\/libs\/[^>]*>/gi, '');
html = html.replace(/\s*<link\b[^>]*assets\/css\/tailwind\.css[^>]*>/gi, '');
html = html.replace(/\s*<script\b[^>]*assets\/libs\/[^>]*>\s*<\/script>/gi, '');
html = html.replace(/\s*<script\b[^>]*assets\/js\/(?:app|plugins\.init)\.js[^>]*>\s*<\/script>/gi, '');
html = html.replace(/<head>/i, '<head>\n        <base href="/">');
html = html.replace(/<\/body>/i, '    <app-root></app-root>\n    </body>');

writeFileSync(outputPath, html);