<template>
  <div class="bg-background h-screen w-full overflow-y-scroll snap-y snap-mandatory">
    <section
      class="h-screen flex items-center justify-center bg-red-500 snap-start"
    >
    <Hero />

    </section>
    <section
      class="h-screen flex items-center justify-center bg-blue-500 snap-start"
    >
      <h1 class="text-4xl text-white">Slide 2</h1>
    </section>
    <section
      class="h-screen flex items-center justify-center bg-green-500 snap-start"
    >
      <h1 class="text-4xl text-white">Slide 3</h1>
    </section>
  </div>
</template>

<script setup>
import Hero from './Hero.vue'
</script>