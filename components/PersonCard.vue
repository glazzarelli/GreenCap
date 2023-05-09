<template>
  <div class="relative">
    <nuxt-link :to="`/people/${person.id}`">
      <img src="~/assets/images/placeholder.png" alt="User" class="w-full h-full object-cover max-h-64" />
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between">
        <div class="h-full"></div>
        <div class="bg-black bg-opacity-70">
          <h1 class="text-white text-center py-2">{{ person.name }} {{ person.surname }}</h1>
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
  