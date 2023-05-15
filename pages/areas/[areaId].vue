<template>
  <div v-if="area">
    <Heading :title="'Areas / ' + area.name" />
    <p> This is the passed area: {{ area.name }}</p>
  </div>
  <p v-else>Loading...</p>
</template>

<script setup>
const { areaId } = useRoute().params;
console.log('Area id: ', areaId);
//{ data: area } is object destructuring syntax that extracts the data property from the response object
const { data: area } = await useFetch(useRuntimeConfig().public.baseURL + `/server/areas/${areaId}`);
if(!area.value){
   //inside the createError function we can pass an object used as a prop by Error.vue
   throw createError({statusCode: 404, statusMessage: 'Area not found', fatal: true});
 }

</script>