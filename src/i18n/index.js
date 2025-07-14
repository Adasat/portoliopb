import i18n from 'i18next';

export async function initI18n(initialLocale, initialMessages) {
  await i18n.init({
    lng: initialLocale,
    fallbackLng: 'en',
    resources: {
      [initialLocale]: { translation: initialMessages },
    },
    interpolation: { escapeValue: false },
  });
}

export async function loadLocale(lang) {
  const messages = (await import(`../locales/${lang}.json`)).default;

  if (!i18n.hasResourceBundle(lang, 'translation')) {
    i18n.addResources(lang, 'translation', messages);
  }
  await i18n.changeLanguage(lang);
}

export default i18n;
