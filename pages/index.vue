<!-- Home page -->
<template>
    <div class="hero min-h-screen bg-gradient-to-r from-primary to-accent">
        <div class="hero-overlay bg-opacity-60"> </div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                <p class="mb-5">Try theme here, we can add custom themes, see https://daisyui.com/theme-generator/</p>
                <select class="select w-full max-w-xs" v-model="colorMode.preference">
                    <option disabled selected>Theme</option>
                    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
    'system',
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
];

definePageMeta({
    layout: 'custom',
});

</script>

<style scoped></style>