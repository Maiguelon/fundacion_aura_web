import { access, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const origin = 'https://fundacionaura.org.ar';
const output = new URL('../dist/', import.meta.url);
const sitePages = [
  { path: '/', file: 'index.html', lang: 'es-AR', otherPath: '/en/', otherLang: 'en', label: 'Datos institucionales' },
  { path: '/en/', file: 'en/index.html', lang: 'en', otherPath: '/', otherLang: 'es-AR', label: 'Organization details' },
];

for (const page of sitePages) {
  test(`La página estática ${page.path} permite navegar y consultar los datos de AURA`, async () => {
    const html = await readFile(new URL(page.file, output), 'utf8');

    assert.ok(html.includes(`<html lang="${page.lang}"`));
    assert.ok(html.includes(`rel="canonical" href="${origin}${page.path}"`));
    assert.ok(html.includes(`hreflang="${page.otherLang}" href="${origin}${page.otherPath}"`));
    assert.ok(html.includes(`<a href="${page.otherPath}" lang="${page.otherLang}"`));
    assert.doesNotMatch(html, /<iframe\b/i);

    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, 'cada identificador debe ser único');
    for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) {
      assert.ok(ids.includes(fragment), `#${fragment} debe apuntar a una sección existente`);
    }

    for (const section of ['proposito', 'programas', 'alianzas', 'participar', 'equipo', 'contacto']) {
      assert.ok(ids.includes(section), `falta la sección ${section}`);
    }

    assert.ok(html.includes(page.label));
    assert.ok(html.includes('30-71964630-8'));
    assert.ok(html.includes('317/2026-DPJ'));
    assert.ok(html.includes('San Miguel de Tucumán, Tucumán, Argentina'));
    assert.ok(html.includes('mailto:contacto@fundacionaura.org.ar'));

    const images = [...html.matchAll(/(?:src|href)="(\/imagenes\/[^"]+)"/g)];
    assert.equal(new Set(images.map(([, url]) => url)).size, 8);
    for (const [, url] of images) {
      await access(new URL(url.slice(1), output));
    }
    await access(new URL('imagenes/taller-480.webp', output));
  });
}
