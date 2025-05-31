<template>
    <div 
    class="flex flex-col gap-2 h-screen md:h-fit md:py-32 md:mt-56 w-full justify-center items-center bg-background overflow-hidden" 
    :class="{'border-2 border-primary rounded-md': store.dev}">
        <p class="text-5xl md:text-8xl font-quantico text-gradient">Pedro Bonilla</p>
        <p class="text-4xl md:text-6xl font-quantico text-gradient">Sofware Developer</p>
    </div>
</template>

<script setup>
import { useWebStore } from '../stores/web';
const store = useWebStore()

</script>

<style scoped>

@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes lightSwipe {
    0% { transform: translateX(-100%) translateY(0); opacity: 0; }
    25% { opacity: 0.3; }
    50% { transform: translateX(100%) translateY(0); opacity: 0; }
    100% { transform: translateX(-100%) translateY(0); opacity: 0; }
}

.text-gradient {
    position: relative;
    display: inline-block;
    background-image: linear-gradient(90deg, var(--color-green3), var(--color-green2));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    animation: gradientMove 4s infinite linear;
    
    /* Evitar scroll y overflow */
    overflow: hidden;
}

.text-gradient::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    /* 🔥 Brillo más ligero y sin scroll */
    background: radial-gradient(circle, var(--color-green1) 20%, transparent 80%);
    
    mix-blend-mode: overlay;
    transform: translateX(-100%);
    opacity: 0;
    
    animation: lightSwipe 4s infinite ease-in-out;
    
    /* ✨ Evitar que el brillo expanda su área */
    -webkit-mask-image: text;
    mask-image: text;
    overflow: hidden;
}


</style>