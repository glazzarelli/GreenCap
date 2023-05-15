<template>
  <Heading :title="`People / ` + person.name + ' ' + person.surname" />
  <!-- start of the square -->
  <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full mx-auto mt-10">
    <div class="bg-green-200 bg-cover bg-center w-full h-[500px] border-4 border-green-700 rounded-lg">
      <img src="~/assets/images/placeholder.png" alt="User" class="w-full h-full object-contain" />
    </div>
    <div
      class="flex items-center justify-center text-lg font-semibold w-full h-[500px] overflow-auto p-4 border-4 border-green-700 rounded-lg">
      {{ person.motto }}
    </div>
    <div
      class="flex items-start justify-center text-lg font-semibold w-full h-[500px] overflow-auto p-4 pb-4 border-4 border-green-700 rounded-lg">
      {{ person.cv }}
    </div>
    <div
      class="bg-green-200 flex items-center justify-center text-lg font-semibold w-full h-[500px] overflow-auto p-4 border-4 border-green-700 rounded-lg">
      {{ person.motto }}
    </div>
  </div>
  <!-- end of the square -->


  <div class="mt-12">
    <h1>Followed Projects</h1>
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

<style scoped></style>