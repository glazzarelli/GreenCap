<template>
  <div class="relative">
    <nuxt-link :to="`/people/${person.id}`">
      <div class="card card-compact image-full max-w-md mx-auto">
        <figure> <img src="~/assets/images/placeholder.png" />
        </figure>
        <div class="card-body text-center mt-28">
          <h2 class="card-title justify-center">{{ person.name }} {{ person.surname }}</h2>
          <p class="neutral">Supervisor</p>
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
  