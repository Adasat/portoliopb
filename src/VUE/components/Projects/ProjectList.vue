<template>
  <div class="md:px-8 py-12">
    <h2
      class="text-3xl md:text-5xl font-extralight font-quantico text-white mb-6 px-8 md:px-0"
    >
      {{ t("projectsTitle") }}
    </h2>
    <ProjectCard
      v-for="(project, i) in projects"
      :key="i"
      :project="project"
      class="mb-10 text-white"
    />
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import { inject, computed } from "vue";

const t = inject("t"); // viene de BigDevices.vue
if (!t) throw new Error("No se encontró el provider de traducción");

const projects = computed(() => t("projects", { returnObjects: true }));
</script>
