// Convierte la primera mención de «Wikipedia» de un texto plano en un enlace
// a la Wikipedia en español. Devuelve HTML (usar con set:html): el texto se
// escapa antes de insertar el enlace, y solo se enlaza la primera mención
// para no diluir el valor SEO del enlace saliente.

export const WIKIPEDIA_URL = 'https://es.wikipedia.org/wiki/Wikipedia';

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function linkWikipedia(text: string): string {
  return escapeHtml(text).replace(
    /\bWikipedia\b/,
    `<a href="${WIKIPEDIA_URL}" target="_blank" rel="noopener">Wikipedia</a>`,
  );
}
