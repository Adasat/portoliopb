import type { App } from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

export default (app: App) => {
  app.use(createPinia());
};