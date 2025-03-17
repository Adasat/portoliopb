<template>
  <div class="hidden sm:flex w-full bg-background">
    <!-- Sidebar fijo -->
    <div
      class="bg-transparent w-[100px] lg:w-[150px] flex flex-col items-end text-end justify-between gap-4 py-12 fixed h-screen"
    >
      <img src="/Logo.png" alt="Logo" width="80" height="80" />
      <div>
        <ToogleLanguage />
        <SocialMediaGroup />
      </div>
    </div>

    <div class="flex w-full flex-col gap-4 pl-20 px-20 lg:pl-32 lg:px-32 xl:pl-52 xl:px-52">
      <Hero />
      <About />
      <ProjectList />
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import SocialMediaGroup from "../components/SocialMediaGroup.vue";
import ToogleLanguage from "../components/ToogleLanguage.vue";
import ProjectList from "../components/Projects/ProjectList.vue";
</script>
