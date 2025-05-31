<template>
    <span ref="tooltipRef">
      <slot></slot>
    </span>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import tippy from "tippy.js";
  import "tippy.js/dist/tippy.css"; // Importar estilos de Tippy.js
  
  const tooltipRef = ref(null);
  const props = defineProps({
    text: String
  });
  
  onMounted(() => {
    if (tooltipRef.value) {
      tippy(tooltipRef.value, {
        content: props.text,
        placement: "bottom",
        animation: "fade"
      });
    }
  });
  </script>
  