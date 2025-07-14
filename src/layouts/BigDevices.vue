<template>
  <div class="hidden sm:flex w-full bg-background">
    <SideBar t="translate" />

    <div
      class="flex w-full flex-col gap-4 pl-20 px-20 lg:pl-32 lg:px-32 xl:pl-52 xl:px-52"
      :class="{ 'border-3 border-secondary rounded-md': store.dev }"
    >
      <Hero :t="translate" />
      <About :t="translate" />

      <ProjectList :t="translate" />
    </div>
  </div>
</template>

<script setup>
import About from "../VUE/components/About.vue";
import ProjectList from "../VUE/components/Projects/ProjectList.vue";
import SideBar from "../VUE/components/SideBar.vue";
import Hero from "../VUE/components/Hero.vue";

import { provide } from "vue";
import { initI18n } from "../i18n";
import { useI18n } from "../composables/useI18n";
import { useWebStore } from "../VUE/stores/web";

const store = useWebStore();

const props = defineProps({
  initialLocale: String,
  initialMessages: Object,
});

/* 2.  Espera a que i18n se inicialice ANTES de hidratar hijos */
await initI18n(props.initialLocale, props.initialMessages);

/* 3.  Ahora t ya tiene el catálogo cargado */
const { t } = useI18n();
const translate = (...args) => t.value(...args);
provide("t", translate);
</script>
