<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <NuxtLink :to="`/projects/${project.id}`">
            <figure><img src="~/assets/images/placeholder.png" alt="Startup Logo" /></figure>
        </NuxtLink>

        <div class="card-body">
            <h2 class="card-title">
                {{ project.name }}
            </h2>
            <p>{{ project.descriptionShort }}</p>
            <div class="card-actions justify-end">
                <button class="badge badge-secondary" v-for="area in project.areas" :key="area">
                    {{ area.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project'])
</script>

<style scoped></style>
