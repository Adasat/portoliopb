<template>
  <div class="hidden sm:flex w-full bg-background">
    <!-- Sidebar fijo -->
    <div
      class="bg-transparent w-fit  flex flex-col items-end text-end justify-between gap-4 py-12 pr-4 fixed h-screen"
      :class="{'border-3 border-primary rounded-md': store.dev}"
    >
      <img src="/Logo.png" alt="Logo" width="80" height="80" />
      <div>
        <ToogleLanguage />
        <SocialMediaGroup />
        <!-- <Toogle
          :label="'Dev mode'"
          :modelValue="store.dev"
          :setValue="store.setDev"
        /> -->
      </div>
    </div>

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
import { useWebStore } from "../stores/web";
import Hero from "../components/Hero.vue";
import Toogle from "../components/Toogle.vue";
import About from "../components/About.vue";
import SocialMediaGroup from "../components/SocialMediaGroup.vue";
import ToogleLanguage from "../components/ToogleLanguage.vue";
import ProjectList from "../components/Projects/ProjectList.vue";
const store = useWebStore(); // Acceder al store global
</script>
