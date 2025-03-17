import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

const isClient = typeof window !== "undefined"; // Detecta si está en el navegador

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages: { en, es },
  warnHtmlMessage: false,
  warnHtmlInMessage: "off",
});
