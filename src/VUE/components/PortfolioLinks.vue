<template>
    <div class="flex flex-col justify-center items-center gap-8 mb-12">
        <Tooltip text="Estás viendo el portfolio de Vue">
            <a

              :class="[
                currentPath === '/' ? 'drop-shadow-vue' : 'opacity-50 hover:opacity-100'
              ]"
            >
              <img src="/Vue.-icon.svg.png" alt="Vue Logo" width="50" height="50" />
            </a>
        </Tooltip>
  
      <Tooltip text="Ver el portfolio de React">
        <a
          href="/react"
          :class="[
            currentPath === '/react' ? 'drop-shadow-react' : 'opacity-50 hover:opacity-100'
          ]"
        >
          <img src="/React-icon.svg.png" alt="React Logo" width="50" height="50" />
        </a>
      </Tooltip>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Tooltip from './Tooltip.vue';
  
  const currentPath = ref('/');
  
  onMounted(() => {
    currentPath.value = window.location.pathname;
  });
  </script>
  
  <style scoped>
  .drop-shadow-vue {
    filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.75));
  }
  
  .drop-shadow-react {
    filter: drop-shadow(0 0 8px rgba(97, 218, 251, 0.75));
  }
  </style>
  