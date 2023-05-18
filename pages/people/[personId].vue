<template>
  <Heading :title="`People / ` + person.name + ' ' + person.surname" />
  <div class="grid sm:grid-cols-2 gap-4">
    <div class="shadow-lg rounded-lg p-5">
    <img class="w-full rounded-md" :src="`/images/people/${person.image}`" alt="Image description">
    <!-- <h2 class="text-xl font-bold mt-4">{{person.motto}}</h2> -->
    <!-- Additional info here -->
    </div>
    <div class="shadow-sm rounded-lg p-5">
      <blockquote class="italic text-center text-4xl font-serif mt-10 mb-24">
          "{{person.motto}}"
      </blockquote>
      <h2>{{ person.cv }}</h2>
    </div>
</div>

  <div class="mt-12">
    <h1>Supervised Projects</h1>
    <div class="flex flex-wrap">
      <ProjectCardForPerson v-for="project in person.projects" :key="project.id" :project="project"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" />
    </div>
  </div>
</template>


<script setup>
//passed via link
const { personId } = useRoute().params;
const { data: person } = await useFetch(useRuntimeConfig().public.baseURL + `/server/people/${personId}`);
if(!person.value){
  //inside the createError function we can pass an object used as a prop by Error.vue
  throw createError({statusCode: 404, statusMessage: 'Person not found', fatal: true});
}
</script>

<style scoped>
  .motto {
    font-family: 'Abyssinica SIL', serif;
}
</style>