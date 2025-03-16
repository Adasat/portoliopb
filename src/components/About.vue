<template>
  <div class="flex flex-col gap-4 px-8 py-12 md:py-24">
    <h1 class="text-3xl md:text-5xl font-extralight font-quantico text-white">
      {{ t("description") }}
    </h1>
    <div class="hidden md:flex flex-col">
      <p
        v-for="(p, index) in about"
        :key="index"
        class="text-sm md:text-xl font-textMe text-white"
      >
        {{ p }}
      </p>
    </div>
    <div class="flex flex-col gap-4 md:hidden">
      <p class="text-lg  font-textMe text-white">
        {{ about[0] }}
      </p>
      <p class="text-lg font-textMe text-white">
        {{ about[1] }}
      </p>
      <p class="text-lg font-textMe text-white">
        {{ about[2] }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, unref } from "vue";
import { useI18n } from "vue-i18n";
import { i18n } from "../i18n"; // Importamos la instancia de i18n

const { t, locale } = useI18n({ useScope: "global" });

// Acceder correctamente al array desde `i18n.global.messages`
const about = computed(() => {
  const messages = unref(i18n.global.messages); // 🔥 Accedemos correctamente al objeto reactivo

  return messages[locale.value]?.about || []; // Extraemos el array correctamente
});
</script>
