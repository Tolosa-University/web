# Tolosa University — web

Web de [tolosauniversity.com](https://tolosauniversity.com), construida con [Astro](https://astro.build).

Universidad ficticia y satírica: «la universidad de los que _to' lo saben_», fundada antes de la inteligencia artificial. Lema: _In Wikipedia Veritas_.

## Cómo funciona

- El código fuente vive en `src/`:
  - Páginas en `src/pages/` (`index`, `grados`, `masteres`, `profesorado`, `investigacion`, `servicios`, `nosotros`, `admisiones`, `generador`, `404`).
  - Componentes reutilizables en `src/components/` (`Header`, `Footer`, `PageHero`, `Monogram`, `DegreeCard`, `CookieConsent`).
  - Datos compartidos (grados, másteres, títulos del generador) en `src/data/oferta.ts`.
  - Layout y sistema de diseño (colores, tipografías, utilidades) en `src/layouts/Layout.astro`.
- Google Analytics usa Consent Mode v2: todo denegado por defecto y solo se activa
  `analytics_storage` si el usuario acepta en el banner de cookies (`CookieConsent.astro`).
- Los assets estáticos (imágenes, favicon, `CNAME`, `robots.txt`) viven en `public/` y se copian tal cual al build.
- El `sitemap-index.xml` se genera automáticamente con `@astrojs/sitemap`.
- **Deploy automático:** cada push a `main` dispara el workflow de GitHub Actions (`.github/workflows/deploy.yml`), que compila la web y la publica en GitHub Pages. No hay que compilar ni commitear artefactos en local.

## Comandos

Requiere Node 22+ (fijado en `.tool-versions` para asdf).

| Comando           | Acción                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run check`   | Typecheck (`astro check`; también corre en CI)|
| `npm run build`   | Compila la web en `dist/` (solo para probar)  |
| `npm run preview` | Sirve el build de `dist/` en local            |
