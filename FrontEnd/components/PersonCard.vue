<template>
  <div class="relative">
    <nuxt-link :to="`/people/${person.id}`">
      <div class="card card-compact image-full max-w-md mx-auto">
        <figure class="relative"> 
          <img :src="`images/people/${person.image}`" alt="Person Image"/>
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
const { person } = defineProps({
  person: {
    type: Object,
    required: true,
  },
});
    //console.log("this is the person data: ", person);
</script>

<style scoped>
figcaption h2 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
  
