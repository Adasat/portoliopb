<template>
   <div class="flex  sm:flex-col justify-center items-center gap-4">
    <Tooltip text="Github">
      <a href="https://github.com/Adasat" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
        <GithubIcon />
      </a>
    </Tooltip>
    <Tooltip text="Linkedin">
      <a href="https://linkedin.com/in/pedro-bonilla-bolanos" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
        <LinkedinIcon />
      </a>
    </Tooltip>
  </div>
  </template>
  
  <script setup>
  import GithubIcon from '../../assets/icons/GithubIcon.vue';
  import LinkedinIcon from '../../assets/icons/LinkedinIcon.vue';
  import Tooltip from './Tooltip.vue';
  </script>
  
  <style scoped>
 
  </style>
  