<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <circle cx="4" cy="4" r="2" :fill="currentColor" fill-opacity="0">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.15s"
          values="0;1"
        />
      </circle>
      <g
        fill="none"
        :stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      >
        <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.15s"
            dur="0.2s"
            values="12;0"
          />
        </path>
        <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.45s"
            dur="0.2s"
            values="12;0"
          />
        </path>
        <path
          stroke-dasharray="24"
          stroke-dashoffset="24"
          d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.65s"
            dur="0.2s"
            values="24;0"
          />
        </path>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#008844" // Azul LinkedIn
  },
  hoverColor: {
    type: String,
    default: "#00FF88" // Verde neón (puedes cambiarlo)
  }
});

const isHovered = ref(false);

// Cambia el color entre el color normal y el hoverColor
const currentColor = computed(() => (isHovered.value ? props.hoverColor : props.color));
</script>
