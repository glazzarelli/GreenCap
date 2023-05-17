<template>
  <div v-if="area">
    <Heading :title="'Areas / ' + area.name" />
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-18 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-cover object-center h-full w-full"  :src="'/assets/images/areas/' + area.name.replace(/ /g, '-') + '.png'">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{area.descriptionShort}}</h2>
            <button class="mt-3 text-indigo-500 inline-flex items-center" @click="expand = !expand">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p v-if="expand" class="mt-3 text-gray-500">{{area.descriptionLong}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  <p v-else>Loading...</p>
</template>

<script setup>
const expand = ref(false);
const { areaId } = useRoute().params;
console.log('Area id: ', areaId);
//{ data: area } is object destructuring syntax that extracts the data property from the response object
const { data: area } = await useFetch(useRuntimeConfig().public.baseURL + `/server/areas/${areaId}`);
if(!area.value){
   //inside the createError function we can pass an object used as a prop by Error.vue
   throw createError({statusCode: 404, statusMessage: 'Area not found', fatal: true});
 }

//const path = area.name.replace(' ', '-');
</script>