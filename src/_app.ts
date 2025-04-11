import type { App } from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from './i18n';  // instancia vue-i18n configurada

export default (app: App) => {
  app.use(createPinia());
  app.use(i18n);  // registra vue-i18n en la aplicación Vue antes de renderizar
};