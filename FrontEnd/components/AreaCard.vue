<template>
    <div class="card md:card-side bg-base-100">
      <figure class="w-full md:w-1/3 h-48 md:h-auto relative object-cover object-center rounded">
        <img :src="imageSrc" alt="Area image" class="absolute inset-0 object-cover w-full h-full" />
      </figure>
      <div class="card-body md:w-1/2 py-1 px-5 flex flex-col justify-between">
                <NuxtLink :to="`/areas/${props.area.id}`">
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
import { ref, computed, onMounted } from 'vue';

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

const imageSrc = ref('');
async function loadImage(imagePath) {
  try {
    const response = await fetch(imagePath);
    if (response.ok) {
      return imagePath;
    } else {
      throw new Error('Image not found');
    }
  } catch (error) {
    // imageSrc.value = `../images/areas/${props.area.image}`;
    return `../images/areas/${props.area.image}`; // Return an empty string or a default image path if the image is not found
  }
}

onMounted(async () => {
  imageSrc.value = await loadImage(`/images/areas/${props.area.image}`);
});

</script>

<style scoped>
.card{
    @apply h-2/4 w-full shadow-lg rounded-lg  relative;
  }
</style>
