<template>
  <Heading :title="`People / ` + person.name + ' ' + person.surname" />
  <div class="mt-10 mb-18">
    <img :src=imagePath class="rounded-md lg:float-left lg:h-1/3 lg:w-1/3 mr-8 mb-2 shadow-lg lg:max-h-screen lg:object-cover" alt="Person Image">
    <p class="italic text-center text-4xl font-serif pl-6 pr-6 mb-8">"{{person.motto}}"</p>
    <h2>{{ person.cv }}</h2>
  </div>
  <div class="mt-12">
    <h1>Supervised Projects</h1>
    <div class="card-container">
      <ProjectCardWithoutLinks v-for="project in person.projects" :key="project.id" :project="project"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" />
    </div>
  </div>
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
