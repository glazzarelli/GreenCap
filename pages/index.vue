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
                <hr />
                <div class="badge">default</div>
                <div class="badge badge-primary">primary</div>
                <div class="badge badge-secondary">secondary</div>
                <div class="badge badge-accent">accent</div>
                <div class="badge badge-ghost">ghost</div>
                <div class="badge bg-base-100">bg-base-100</div>
                <div class="badge bg-base-200">bg-base-200</div>
                <div class="badge badge-outline">outline</div>
                <div class="badge badge-success">success</div>
                <div class="badge badge-error">error</div>
                <div class="badge badge-warning">warning</div>
                <div class="badge badge-info">info</div>
                <div class="badge badge-neutral">neutral</div>
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
];

definePageMeta({
    layout: 'custom',
});

</script>

<style scoped></style>