<template>
    <NuxtLink :to="`/areas/${props.area.id}`">
        <div class="card">
            <div class="card-body flex">
                <div class="w-1/3">
                    <img src="~/assets/images/placeholder.png" alt="image" class="h-full w-full object-cover" />
                </div>
                <div class="flex-grow mx-20 max-w-3xl">
                    <h5 class="card-title">{{ props.area.name }}</h5>
                    <p class="card-text">{{ props.area.descriptionShort }}</p>

                    <p class="card-subtitle">Linked Projects:</p>
                    <div v-for="project in area.projects" :key="project.id"
                        class="m-px center relative inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                        {{ project.name }}
                    </div>
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

<style scoped>
.card {
    width: 75rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-img-top {
    width: 100%;
    height: 15rem;
    object-fit: cover;
}

.card-body {
    padding: 1rem;
}

.card-title {
    font-size: 1.25rem;
}

.card-text {
    margin-bottom: 1rem;
}

.card-subtitle {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
}
</style>
