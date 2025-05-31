import { defineStore } from 'pinia';

export const useWebStore = defineStore('web', {
  state: () => ({
    dev: false, // Valor inicial
  }),
  actions: {
    // Método para alternar el estado `dev`
    setDev(value) {
      this.dev = value;
    },
  },
});
