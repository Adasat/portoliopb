<template>
  <div class="mb-4 font-quantico">
    <button
      v-if="locale === 'es'"
      @click="changeLang('en')"
      class="text-green3 hover:text-green1 text-2xl px-3 py-1 rounded m-2 cursor-pointer"
    >
      EN
    </button>
    <button
      v-else
      @click="changeLang('es')"
      class="text-green3 hover:text-green1 text-2xl px-3 py-1 rounded m-2 cursor-pointer"
    >
      ES
    </button>
  </div>
</template>

<script setup>

import { useI18n } from "vue-i18n";
// Accedemos a la traducción y al idioma actual
const { t, locale } = useI18n({ useScope: "global" });

const changeLang = (lang) => {
  locale.value = lang;
};
</script>

<style lang="scss" scoped></style>
