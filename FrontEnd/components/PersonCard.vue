<template>
  <div class="relative">
    <nuxt-link :to="`/people/${person.id}/`">
      <div class="card card-compact image-full max-w-md mx-auto">
        <figure class="relative"> 
          <img :src ="imageSrc" alt="Person Image"/>
          <figcaption class="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center p-2">
            <h2 class="card-title justify-center font-semibold text-shadow">{{ person.name }} {{ person.surname }}</h2>
          </figcaption>
        </figure>
        <div class="card-body text-center mt-28">
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

  
<script setup>
import { ref, computed, onMounted } from 'vue';

const { person } = defineProps({
  person: {
    type: Object,
    required: true,
  },
});
//solution 1
const imageUrl = new URL(person.image, useRuntimeConfig().public.baseURL).toString();
console.log("this is the image url1 "+ imageUrl);

//solution 2
const { data, pending, error, refresh } = await useFetch('http://localhost:3001/images',{
  pick: ['person.image']
});

const imageUrl2 = new URL(person.image, 'https://glazzarelli.github.io/GreenCap/images/people/').toString();
console.log("this is the image url2"+ imageUrl2);

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
figcaption h2 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
  
