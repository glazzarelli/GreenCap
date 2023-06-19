<template>
    <div class="card md:card-side bg-base-100"> 
      <figure class="w-full md:w-1/3 h-48 md:h-auto relative object-cover object-center rounded">
        <NuxtLink :to="`/areas/${area.id}/`">
        <img :src=imagePath alt="Area image" class="absolute inset-0 object-cover w-full h-full" />
        </NuxtLink>
      </figure>
      <div class="card-body md:w-1/2 py-1 px-5 flex flex-col justify-between">
                <NuxtLink :to="`/areas/${area.id}/`">
                <h2 class="card-title">{{ area.name }}</h2>
                <p class="">{{ area.descriptionShort }}</p>
                <p class="items-end">In this area we already invested: {{ area.totalInvestment }} €</p>
                </NuxtLink>
                <div class="card-actions justify-end">
                    <p class="my-0">Projects in this area:</p>
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
  const { area } = defineProps(['area']);
  const imagePath = useImages('areas',area.image.replace('.png', ''));
</script>

<style scoped>
.card{
    @apply h-2/4 w-full shadow-lg rounded-lg  relative;
  }
</style>
