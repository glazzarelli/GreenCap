<template>
  <div v-if="area">
    <Heading :title="'Areas / ' + area.name" />
    <section>
    <div class="container px-5 py-18 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img :src=imagePath alt="area image" class="object-cover object-center h-full w-full">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-lg title-font font-medium mb-3">{{area.descriptionLong}}</h2>
            <p class="items-end" style="font-weight: bold; font-size: 18px;">In this area we already invested:  {{ area.totalInvestment }} €</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12">
    <h1>Projects in this area</h1>
    <div class="card-container">
      <ProjectCardSmall v-for="project in area.projects" :key="project.id" :project="project"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" />
    </div>
  </div>
  </section>
  </div>
  <p v-else>Loading...</p>
</template>

<script setup>
const expand = ref(false);
const { areaId } = useRoute().params;
const { data: area } = await useFetch(useRuntimeConfig().public.baseURL + `/areas/${areaId}`);

if(!area.value){
   throw createError({statusCode: 404, statusMessage: 'Area not found', fatal: true});
}

const imagePath = useImages('areas',area.value.name);

useHead({
            title: 'Areas - GreenCapital',
            meta: [
                // Add page description
                {
                    name: 'description',
                    content: 'The purpose of a area page is to provide visitors with an overview of the areas involved in our company',
                },
                // Add page keywords
                {
                    name: 'keywords',
                    content: 'projects, opportunities, investment, features',
                },
                
            ],
        })
</script>
