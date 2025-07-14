<template>
  <div class="flex flex-col gap-4 px-8 py-6 md:py-24">
    <h2 class="text-3xl md:text-5xl font-extralight font-quantico text-white">
      {{ t("description") }}
    </h2>
    <div class="hidden md:flex flex-col gap-4">
      <p
        v-for="(p, index) in about"
        :key="index"
        class="text-sm md:text-lg font-textMe text-white"
        v-html="p"
        >
      </p>
    </div>
    <div class="flex flex-col gap-4 font-textMe text-lg text-white md:hidden">
      <p v-html="about[0]"></p>
      <p  v-html="about[1]"></p>
      <p  v-html="about[2]"></p>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const t = inject('t');           // viene de BigDevices.vue
if (!t) throw new Error('No se encontró el provider de traducción');

const about = computed(() => t('about', {returnObjects: true}));   // asume que "about" en JSON es un array
</script>
