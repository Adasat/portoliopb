// src/utils/i18n.js
/**
 * Carga el archivo JSON de traducciones para el locale indicado
 * y devuelve un objeto con las claves que necesites.
 *
 * ⚠️  Solo debe usarse en el *server-side* de Astro
 *     (front-matter de los .astro, endpoints, etc.).
 */
export async function getI18n(locale = 'en') {
    try {
      const mod = await import(`../locales/${locale}.json`);
      const messages = mod.default;
  
      return {
        locale,
        messages,
        /**
         * Pequeña función utilitaria para traducir strings en
         * el propio front-matter, si lo necesitas.
         */
        t(key) {
          return key
            .split('.')
            .reduce((o, k) => (o ? o[k] : undefined), messages) ?? key;
        },
      };
    } catch (err) {
      console.error(`[i18n] No se pudo cargar el locale "${locale}"`, err);
      // Fallback a inglés para no romper el build/SSR
      if (locale !== 'en') return getI18n('en');
      throw err;
    }
  }
  