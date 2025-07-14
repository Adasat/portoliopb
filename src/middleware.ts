import { sequence } from "astro/middleware";

const detectLocale = async (context, next) => {
  // 1) Cookie > 2) Accept-Language > 3) fallback
  const cookieLang = context.cookies.get("lang")?.value;
  const headerLang = context.request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];          // ej. “es-ES” → “es”

  context.locals.locale = cookieLang || headerLang || "en";
  return next();
};

export const onRequest = sequence(detectLocale);