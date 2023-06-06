<template>
    <div class="card">
        <NuxtLink :to="`/projects/${project.id}/`">
            <img :src="imageSrc" alt="Startup Logo" class="card-img-top" />
            <div class="card-body">
                <h2 class="card-title">{{ project.name }}</h2>
                <p class="card-text">{{ project.descriptionShort }}</p>
            </div>
        </NuxtLink>
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
  imageSrc.value = await loadImage(`/images/projects/${project.image}`);
});
</script>

<style scoped>
.card {
    width: 25rem;
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