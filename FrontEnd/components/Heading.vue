<template>
    <div class="flex items-center justify-center">
        <h1>{{ title }}</h1>
    </div>
</template>

<script setup>
const { title } = defineProps({
    title: String,
});
</script>

<style scoped></style>