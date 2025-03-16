<template>
   <div class="flex  md:flex-col justify-center items-center gap-4">
    <Tooltip text="Github">
      <GithubIcon />
    </Tooltip>
    <Tooltip text="Linkedin">
      <LinkedinIcon />
    </Tooltip>
  </div>
  </template>
  
  <script setup>
  import GithubIcon from '../assets/icons/GithubIcon.vue';
  import LinkedinIcon from '../assets/icons/LinkedinIcon.vue';
import Tooltip from './Tooltip.vue';
  </script>
  
  <style scoped>
 
  </style>
  