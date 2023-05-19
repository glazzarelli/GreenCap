<template>
        <div class="card md:card-side bg-base-100 shadow-xl">
            <figure class="lg:w-1/3 lg:h-auto h-64 object-cover object-center rounded">
                <img :src="`images/areas/${area.image}`" alt="Area image" class="object-cover w-full h-full" />
            </figure>
            <div class="card-body md:w-1/2">
                <NuxtLink :to="`/areas/${props.area.id}`">
                <h2 class="card-title">{{ area.name }}</h2>
                <p class="">{{ area.descriptionShort }}</p>
                <p class="items-end">In this area we already invested: {{ area.totalInvestment }} €</p>
                </NuxtLink>
                <p class="items-end">Projects in this area</p>
                <div class="card-actions justify-end">
                    <div v-for="project in area.projects" :key="project.id">
                        <NuxtLink :to="`/projects/${project.id}`">
                            <div class="badge badge-secondary">
                                {{ project.name }}
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
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

//console.log('Area data passed to card :', props.area);
</script>

<style scoped></style>
