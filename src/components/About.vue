<template>
  <div class="flex flex-col gap-4 px-8 py-12 md:py-24 bg-accent">
    <p
      v-for="(p, index) in about"
      :key="index"
      class="text-md md:text-xl font-quantico text-white"
    >
      {{ p }}
    </p>
  </div>
</template>

<script setup>
import { computed, unref } from "vue";
import { useI18n } from "vue-i18n";
import { i18n } from "../i18n"; // Importamos la instancia de i18n

const { locale } = useI18n({ useScope: "global" });

// Acceder correctamente al array desde `i18n.global.messages`
const about = computed(() => {
  const messages = unref(i18n.global.messages); // 🔥 Accedemos correctamente al objeto reactivo
  console.log("✅ Mensajes sin reactividad:", messages);
  console.log("✅ Locale actual:", locale.value);

  return messages[locale.value]?.about || []; // Extraemos el array correctamente
});
</script>
