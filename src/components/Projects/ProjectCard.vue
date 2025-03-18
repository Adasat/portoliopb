<template>
    <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <div class="flex flex-col md:flex-row gap-4 px-12 font-textMe text-lg border-b border-gray-800 py-10 hover:bg-secondary/10 cursor-pointer hover:rounded-xl">
            <div class="flex items-center md:items-end  gap-5">
                <img :src="project.image" alt="Project Image" class="rounded-lg min-w-[150px] max-w-[150px] md:min-w-[200px] md:max-w-[200px]" />
                <div class="flex flex-col md:hidden gap-4">
                    <p class="text-xl font-bold">{{ project.title }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <p class="hidden md:block text-xl font-bold">{{ project.title }}</p>
                <p>{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                    <div v-for="(tech, i) in project.technologies" :key="i" class="bg-green3/10 text-green1 text-sm rounded-lg p-2 ">
                       {{ tech }}
                   </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup>
defineProps({
  project: Object
})

</script>

