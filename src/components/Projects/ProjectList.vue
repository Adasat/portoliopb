<template>
    <div class="md:px-8 py-12">
        <h2 class="text-3xl md:text-5xl font-extralight font-quantico text-white mb-6 px-8 md:px-0">
      {{ t("projectsTitle") }}
    </h2>
       <ProjectCard v-for="(project, i) in projects" :key="i" :project="project" class="mb-10 text-white" /> 

    </div>
</template>

<script setup>
import { computed, unref } from 'vue';
import { i18n } from '../../i18n';
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProjectCard.vue';

const {t, locale} = useI18n({useScope: 'global'})

const projects = computed(() => {
    const messages = unref(i18n.global.messages);
    return messages[locale.value]?.projects || [];
})


</script>

<style lang="scss" scoped>

</style>