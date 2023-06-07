<template>
  <div class="relative">
    <nuxt-link :to="`/people/${person.id}/`">
      <div class="card card-compact image-full max-w-md mx-auto" :class="{ 'card-hover-opacity': cardHoverOpacity }" @mouseover="removeOpacity" @mouseleave="addOpacity">
        <figure class="relative"> 
          <img :src="`../images/people/${person.image}`" alt="Person Image"/>
          <figcaption class="absolute bottom-0 w-full card-no-opacity bg-black text-white text-center p-2">
            <h2 class="card-title justify-center font-semibold text-shadow">{{ person.name }} {{ person.surname }}</h2>
          </figcaption>
        </figure>
      </div>
    </nuxt-link>
  </div>
</template>
  
<script setup>
import { ref} from 'vue';

/**
 * The props for the PersonCard component.
 * @typedef {Object} PersonCardProps
 * @property {Object} person - The person object to display.
 * @property {string} person.id - The id of the person.
 * @property {string} person.name - The name of the person.
 * @property {string} person.surname - The surname of the person.
 * @property {string} person.image - The image path of the person.
 */
const { person } = defineProps(['person']);

const cardHoverOpacity = ref(false);
const showOpacity = ref(true);

/**
 * Removes the opacity of the card.
 * @function
 * @name removeOpacity
 */
function removeOpacity() {
  showOpacity.value = false;
  cardHoverOpacity.value = true;
}

/**
 * Adds the opacity of the card.
 * @function
 * @name addOpacity
 */
function addOpacity() {
  showOpacity.value = true;
  cardHoverOpacity.value = false;
}
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

  
