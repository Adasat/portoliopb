<template>
    <div class="flex flex-col justify-center items-center gap-2 mt-6 text-white text-sm">
      <label class="toggle">
        <input type="checkbox" v-model="localChecked" />
        <span class="slider"></span>
      </label>
      <p :class="{'text-green-400': localChecked}">{{ label }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Toggle Option'
    },
    setValue: {
      type: Function,
      required: true
    }
  });
  
  const localChecked = ref(props.modelValue);
  
  watch(localChecked, (newValue) => {
    props.setValue(newValue);
  });
  </script>
  
  <style scoped>
  .toggle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .toggle input {
    display: none;
  }
  
  .toggle {
    position: relative;
    width: 50px;
    height: 25px;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4caf4f67;
    transition: 0.4s;
    border-radius: 34px;
  }
  
  .slider::before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #4CAF50;
  }
  
  input:checked + .slider::before {
    transform: translateX(26px);
  }
  
  .option-text {
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  