# Tolosa University — web

Web de [tolosauniversity.com](https://tolosauniversity.com), construida con [Astro](https://astro.build).

## Cómo funciona

- El código fuente vive en `src/` (páginas en `src/pages/`, layouts en `src/layouts/`).
- Los assets estáticos (imágenes, favicon, `CNAME`) viven en `public/` y se copian tal cual al build.
- **Deploy automático:** cada push a `main` dispara el workflow de GitHub Actions (`.github/workflows/deploy.yml`), que compila la web y la publica en GitHub Pages. No hay que compilar ni commitear artefactos en local.

## Comandos

Requiere Node 20.3+ o 22+ (con Homebrew: `export PATH="/opt/homebrew/opt/node/bin:$PATH"`).

| Comando           | Acción                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Compila la web en `dist/` (solo para probar)  |
| `npm run preview` | Sirve el build de `dist/` en local            |
