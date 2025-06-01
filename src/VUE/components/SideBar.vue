<template>
     <div
      class="bg-transparent w-fit  flex flex-col items-center text-end justify-between gap-4 py-12 pr-4 fixed h-screen"
      :class="{'border-3 border-primary rounded-md': store.dev}"
    >
      <img src="/Logo.png" alt="Logo" class="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24" />
      <PortfolioLinks />

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
</template>

<script setup>
import { useWebStore } from "../stores/web";
const store = useWebStore(); 

import SocialMediaGroup from './SocialMediaGroup.vue';
import ToogleLanguage from './ToogleLanguage.vue';
import PortfolioLinks from './PortfolioLinks.vue';

</script>

<style scoped>

</style>