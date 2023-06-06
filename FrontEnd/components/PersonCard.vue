<template>
  <div class="relative">
    <nuxt-link :to="`/people/${person.id}/`">
      <div class="card card-compact image-full max-w-md mx-auto" :class="{ 'card-hover-opacity': cardHoverOpacity }" @mouseover="removeOpacity" @mouseleave="addOpacity">
        <figure class="relative"> 
          <img :src="imageSrc" alt="Person Image"/>
          <figcaption class="absolute bottom-0 w-full card-no-opacity bg-black text-white text-center p-2" :class="{ 'bg-opacity-75': bgOpacityClass }">
            <h2 class="card-title justify-center font-semibold text-shadow">{{ person.name }} {{ person.surname }}</h2>
          </figcaption>
        </figure>
      </div>
    </nuxt-link>
  </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';

const cardHoverOpacity = ref(false);
const showOpacity = ref(true);

//methods to show and hide opacity
function removeOpacity() {
  showOpacity.value = false;
  cardHoverOpacity.value = true;
}
function addOpacity() {
  showOpacity.value = true;
  cardHoverOpacity.value = false;
}

const { person } = defineProps({
  person: {
    type: Object,
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
    imageSrc.value = "/images/people/ahmed-ali.jpg";
    return `../images/people/${person.image}`; // Return an empty string or a default image path if the image is not found
  }
}

onMounted(async () => {
  imageSrc.value = await loadImage(`./images/people/${person.image}`);
});
</script>

<style scoped>
.card::before {
  transition: opacity 2s;
}
.card-hover-opacity::before {
  opacity: 0 !important;
  transition: opacity 2s;
}
figcaption h2 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>

  
