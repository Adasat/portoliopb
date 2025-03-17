<template>
  <div class="relative h-screen w-full flex flex-col bg-background">
    <!-- 📌 Contenido Desplazable -->
    <main class="flex-1 overflow-y-scroll snap-y snap-mandatory">
      <section id="hero" class="h-screen flex items-center justify-center snap-start">
        <Hero />
      </section>
      <section id="slide2" class="pt-20 flex items-start justify-center snap-start ">
        <About />
      </section>
      <section id="slide3" class="pt-20 flex items-center justify-center snap-start">
      <ProjectList />
      </section>
    </main>

    <footer class="w-full flex justify-between bg-background text-white text-center p-2 shadow-lg fixed bottom-0 left-0">
      <img src="/Logo.png" alt="Logo" width="60" height="60" />
      <ToogleLanguage/>
      <SocialMediaGroup/>

    </footer>
  </div>
</template>

<script setup>
import About from '../components/About.vue';
import Hero from '../components/Hero.vue';
import ProjectList from '../components/Projects/ProjectList.vue';
import SocialMediaGroup from '../components/SocialMediaGroup.vue';
import ToogleLanguage from '../components/ToogleLanguage.vue';

</script>

<style scoped>
/* Evita que el body haga scroll si el contenido ya tiene overflow */
html, body {
  overflow: hidden;
}
</style>
