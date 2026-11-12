# Fundación AURA

Sitio institucional estático. El contenido en español está en `/` y la versión en inglés en `/en/`.

## Vista local

Con Node.js 24:

```sh
npm ci
npm run dev
```

El contenido está en `src/content` y las imágenes optimizadas en `public/imagenes`.

## Verificación

```sh
npm run check
npm test
npx wrangler deploy --dry-run
```

Las pruebas construyen y verifican las dos páginas en `dist`. La configuración de Cloudflare Workers sirve ese directorio como archivos estáticos.
