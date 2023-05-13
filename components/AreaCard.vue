<template>
    <NuxtLink :to="`/areas/${props.area.id}`">
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="~/assets/images/placeholder.png" alt="Area image" class=" object-cover" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ props.area.name }}</h2>
                <p class="lg:max-w-2xl">{{ props.area.descriptionShort }}</p>
                <div class="card-actions justify-end">
                    <button class="badge badge-secondary" v-for="project in area.projects" :key="project.id">
                        {{ project.name }}</button>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>  
  
<script setup>
const props = defineProps({
    area: {
        type: Object,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>
