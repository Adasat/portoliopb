<template>
  <div class="relative h-screen w-full flex flex-col">
    <!-- 📌 Contenido Desplazable -->
    <main class="flex-1 overflow-y-scroll snap-y snap-mandatory">
      <section id="hero" class="h-screen flex items-center justify-center snap-start">
        <Hero />
      </section>
      <section id="slide2" class="h-screen flex items-center justify-center snap-start">
        <About />
      </section>
      <section id="slide3" class="h-screen flex items-center justify-center bg-green-500 snap-start">
        <h1 class="text-4xl text-white">Slide 3</h1>
      </section>
    </main>

    <!-- 📌 Footer Fijo -->
    <footer class="w-full flex justify-between bg-background text-white text-center p-2 shadow-lg fixed bottom-0 left-0">
      <img src="/Logo.png" alt="Logo" width="60" height="60" />
      <SocialMediaGroup/>
    </footer>
  </div>
</template>

<script setup>
import About from './About.vue';
import Hero from './Hero.vue';
import SocialMediaGroup from './SocialMediaGroup.vue';
</script>

<style scoped>
/* Evita que el body haga scroll si el contenido ya tiene overflow */
html, body {
  overflow: hidden;
}
</style>
