<template>
    <div class="hidden sm:flex w-full bg-background">
      <!-- Sidebar fijo -->
      <div class="bg-transparent w-[100px] flex flex-col items-end justify-between gap-4 py-12 fixed h-screen">
        <img src="/Logo.png" alt="Logo" width="80" height="80" />
        <div>
          <!-- Botones para cambiar de idioma -->
          <button @click="changeLang('en')" class="bg-blue-500 text-white px-3 py-1 rounded m-2">🇬🇧 </button>
          <button @click="changeLang('es')" class="bg-green-500 text-white px-3 py-1 rounded m-2">🇪🇸 </button>
        </div>
      </div>
  
      <!-- Contenido traducido -->
      <div class="flex w-full flex-col gap-4 pl-[80px]">
        <Hero />
        <About />
        <div class="h-[1000px] bg-gray-200">Más contenido...</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from "vue-i18n";
  import Hero from "../components/Hero.vue";
  import About from "../components/About.vue";
  import { i18n } from "../i18n"; // Importamos la instancia de vue-i18n
  
  // Accedemos a la traducción y al idioma actual
  const { t, locale } = useI18n({ useScope: "global" });
  
  // Función para cambiar el idioma
  const changeLang = (lang) => {
    locale.value = lang; // Cambia el idioma dinámicamente
  };
  </script>
  