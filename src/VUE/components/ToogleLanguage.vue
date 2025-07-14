<template>
  <div class="sm:mb-4 font-quantico">
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
import { loadLocale } from '../../i18n';
import { useI18n } from '../../composables/useI18n';
const { locale } = useI18n();

function changeLang(lang) {
  if (lang !== locale.value) {
    loadLocale(lang);     
  }
}
</script>

<style lang="scss" scoped></style>
