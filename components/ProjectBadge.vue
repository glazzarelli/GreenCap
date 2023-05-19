<template>
    <div v-for="project in projects" :key="project.id">
        <NuxtLink :to="`/projects/${project.id}`">
            <div class="badge badge-secondary">
                {{ project.name }}
            </div>
        </NuxtLink>
    </div>
    
</template>

<script setup>
defineProps({
        projects: {
            type: Array,
            required: true
        }
});
</script>
