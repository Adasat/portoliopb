<template>
  <div class="hidden sm:flex w-full bg-background">
    <SideBar />

    <div
      class="flex w-full flex-col gap-4 pl-20 px-20 lg:pl-32 lg:px-32 xl:pl-52 xl:px-52"
      :class="{'border-3 border-secondary rounded-md': store.dev}"
    >
      <Hero />
      <About />

      <ProjectList />
    </div>
  </div>
</template>

<script setup>
import { useWebStore } from "../VUE/stores/web";
import Hero from "../VUE/components/Hero.vue";
import About from "../VUE/components/About.vue";
import ProjectList from "../VUE/components/Projects/ProjectList.vue";
import SideBar from "../VUE/components/SideBar.vue";
const store = useWebStore(); // Acceder al store global
</script>
