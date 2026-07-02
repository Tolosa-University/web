# Tolosa University — web

Web de [tolosauniversity.com](https://tolosauniversity.com), construida con [Astro](https://astro.build).

Universidad ficticia y satírica: «la universidad de los que _to' lo saben_», fundada antes de la inteligencia artificial. Lema: _In Wikipedia Veritas_.

## Cómo funciona

- El código fuente vive en `src/`:
  - Páginas en `src/pages/` (`index`, `grados`, `profesorado`, `investigacion`, `servicios`, `nosotros`, `admisiones`, `404`).
  - Componentes reutilizables en `src/components/` (`Header`, `Footer`, `PageHero`, `Monogram`).
  - Layout y sistema de diseño (colores, tipografías, utilidades) en `src/layouts/Layout.astro`.
- Los assets estáticos (imágenes, favicon, `CNAME`, `robots.txt`) viven en `public/` y se copian tal cual al build.
- El `sitemap-index.xml` se genera automáticamente con `@astrojs/sitemap`.
- **Deploy automático:** cada push a `main` dispara el workflow de GitHub Actions (`.github/workflows/deploy.yml`), que compila la web y la publica en GitHub Pages. No hay que compilar ni commitear artefactos en local.

## Comandos

Requiere Node 22+ (fijado en `.tool-versions` para asdf).

| Comando           | Acción                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Compila la web en `dist/` (solo para probar)  |
| `npm run preview` | Sirve el build de `dist/` en local            |
