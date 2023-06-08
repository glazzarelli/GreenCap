<template>
  <section class="sm:max-w-none">
    <Heading :title="`People / ` + person.name + ' ' + person.surname" />
    <div class="container flex px-2 py-3 xl:flex-row flex-col md:max-w-none text-center">
      <div class="lg:max-w-lg md:w-1/2 lg:w-full mb-10 item mx-auto">
        <img class="object-cover object-center rounded mx-auto" alt="hero" :src="imagePath">
      </div>
      <div class="lg:flex-grow md:w-full lg:pl-22 md:pl-16 flex flex-col md:items-start text-center md:text-left">
        <p class="italic text-center text-3xl font-serif md:my-auto">"{{person.motto}}"</p>
        <hr class="w-1/4 my-6 border-gray-300 mx-auto">
        <p class="text-xl font-bold md:px-20 lg:px-2">{{ person.cv }}</p>
      </div>
    </div>
    <div class="mt-12">
      <h1>Supervised Projects</h1>
      <div class="card-container">
        <ProjectCardSmall v-for="project in person.projects" :key="project.id" :project="project" class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" />
      </div>
    </div>
  </section>
</template>
<script setup>
import useImages from '@/composables/useImages';

const { personId } = useRoute().params;
const { data: person } = await useFetch(useRuntimeConfig().public.baseURL + `/people/${personId}`);
if (!person.value) {
  throw createError({ statusCode: 404, statusMessage: 'Person not found', fatal: true });
}
const imagePath = useImages('people', person.value.image.replace('.jpg', ''));

useHead({
  title: 'People - GreenCapital',
  meta: [
    {
      name: 'description',
      content: 'The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions.',
    },
    {
      name: 'keywords',
      content: 'people, expertise, team, profiles',
    },
    
  ],
})
</script>

<style scoped>
  .motto {
    font-family: 'Abyssinica SIL', serif;
}
</style>
