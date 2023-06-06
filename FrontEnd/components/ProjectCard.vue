<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <NuxtLink :to="`/projects/${project.id}/`">
            <figure><img :src="imageSrc" alt="Startup Logo" /></figure>
        </NuxtLink>

        <div class="card-body">
            <h2 class="card-title">
                {{ project.name }}
            </h2>
            <p>{{ project.descriptionShort }}</p>
            <p>Minimum investment: {{ project.investment }} €</p>
            <p>Areas</p>
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
    // // imageSrc.value = `../images/areas/${project.image}`;
    return `../images/projects/${project.image}`; // Return an empty string or a default image path if the image is not found
  }
}

onMounted(async () => {
  imageSrc.value = await loadImage(`./images/projects/${project.image}`);
});

</script>

<style scoped></style>
