<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <NuxtLink :to="`/projects/${project.id}`">
            <figure><img :src="`/images/projects/${project.image}`" alt="Startup Logo" /></figure>
        </NuxtLink>

        <div class="card-body">
            <h2 class="card-title">
                {{ project.name }}
            </h2>
            <p>{{ project.descriptionShort }}</p>
            <p class="items-end">Related Areas:</p>
            <div class="card-actions justify-end">
                <div v-for="area in project.areas" :key="area">
                    <NuxtLink :to="`/areas/${area.id}`">
                        <div class="badge badge-secondary">
                            {{ area.name }}
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project'])
</script>

<style scoped></style>
