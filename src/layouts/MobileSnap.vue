<template>
  <div class="relative h-screen w-full flex flex-col bg-background">
    <main class="flex-1 overflow-y-scroll snap-y snap-mandatory">
        <section id="hero" class="h-screen flex items-center justify-center snap-start">
        <Hero :t="translate"/>
      </section>
    <section id="slide2" class="pt-10 flex items-start justify-center snap-start ">
        <About  :t="translate"/>
      </section>
      <section id="slide3" class="py-10 flex items-center justify-center snap-start">
      <ProjectList  :t="translate"/>
      </section>
    </main>

  <footer class="w-full flex justify-between items-center bg-background p-2 shadow-lg fixed bottom-0 left-0">
      <img src="/Logo.png" alt="Logo" width="60" height="60" />
      <SocialMediaGroup :t="translate"/>
      <div class="flex flex-row items-center gap-2">
        <PortfolioLinks :t="translate"/>
        <ToogleLanguage :t="translate"/>
      </div>

    </footer>  
  </div>
</template>

<script setup>
 import SocialMediaGroup from '../VUE/components/SocialMediaGroup.vue';
import ToogleLanguage from '../VUE/components/ToogleLanguage.vue';
import About from '../VUE/components/About.vue'; 
import Hero from '../VUE/components/Hero.vue';
import ProjectList from '../VUE/components/Projects/ProjectList.vue';
import PortfolioLinks from '../VUE/components/PortfolioLinks.vue'; 

import { provide } from 'vue';
import { initI18n } from '../i18n';
import { useI18n } from '../composables/useI18n';
import { useWebStore } from '../VUE/stores/web';

const props = defineProps({
  initialLocale:   String,
  initialMessages: Object,
});

await initI18n(props.initialLocale, props.initialMessages);

const { t } = useI18n();
const translate = (...args) => t.value(...args);
provide('t', translate);

</script>

<style scoped>
html, body {
  overflow: hidden;
}
</style>
