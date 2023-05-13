<!-- Home page -->
<template>
    <div class="hero min-h-screen" style="background-image: url(~/assets/images/placeholder.png);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    <div class="p-4 flex gap-4">
        <button class="btn">Hello daisyUI</button>
        <select class="select w-full max-w-xs" v-model="colorMode.preference">
            <option disabled selected>Theme</option>
            <option v-for="theme of themes" :key="theme">{{ theme }}</option>
        </select>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
    'lemonade',
    'forest',
];


</script>

<style scoped></style>