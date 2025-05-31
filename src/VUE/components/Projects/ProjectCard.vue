<template>
    <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <div class="flex flex-col md:flex-row gap-6 md:gap-4 px-12 font-textMe text-lg border-b border-gray-800 py-10 hover:bg-secondary/10 cursor-pointer hover:rounded-xl group">
            <div class="flex flex-col-reverse md:flex-row items-center md:items-start gap-5">
                <img :src="project.image" alt="Project Image" class="rounded-lg min-w-full md:min-w-[200px] md:max-w-[200px]" />
                <div class="flex flex-col md:hidden gap-4">
                    <p class="text-2xl md:text-xl font-bold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text" :style="hoverGradientStyle">{{ project.title }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <p class="hidden md:block text-xl font-bold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text" :style="hoverGradientStyle">{{ project.title }}</p>
                <p>{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                    <div v-for="(tech, i) in project.technologies" :key="i" class="bg-green3/10 text-green1 text-sm rounded-lg p-2">
                       {{ tech }}
                   </div>
                </div>
            </div>
        
        </div>
    </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: Object
});

const hoverGradientStyle = computed(() => ({
  'backgroundImage': `linear-gradient(to right, ${props.project.gradientFrom || '#67e8f9'}, ${props.project.gradientTo || '#34d399'})`,
  'backgroundClip': 'text',
  'WebkitBackgroundClip': 'text'
}));
</script>

<style scoped>
/* Esto asegura compatibilidad con todos los navegadores */
.group:hover .group-hover\:bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>