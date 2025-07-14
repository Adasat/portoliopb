import { ref } from 'vue';
import i18n from '../i18n';

const locale = ref(i18n.language);
const t      = ref(i18n.t.bind(i18n));

i18n.on('languageChanged', (lng) => {
  locale.value = lng;
  t.value      = i18n.t.bind(i18n);
});

export function useI18n() {
  return { locale, t };
}
