<template>
    <div>
      <section><h1>{{ person.name }} {{person.surname }}</h1></section>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full mx-auto mt-10">
      <div class="bg-cover bg-center w-full h-[500px]">
        <img src="~/assets/images/placeholder.png" alt="User" class="w-full h-full object-contain" />
      </div>
      <div class="flex items-center justify-center text-lg font-semibold w-full h-[500px] overflow-auto p-4">
        {{person.motto}}
      </div>
      <div class="flex items-start justify-center text-lg font-semibold w-full h-[500px] overflow-auto p-4 pb-4">
        {{person.cv}}
      </div>
      <div class="flex items-center justify-center text-lg font-semibold w-full h-[500px] overflow-auto p-4">
        {{person.motto}}
      </div>
    </div>
  </template>

<script setup>
    //passed via link
    const { personId } = useRoute().params;
    const { data: person } = await useFetch(useRuntimeConfig().public.baseURL + `/server/people/${personId}`);
    //console.log("this is the person passed as a param "+person.name);
</script>

<style scoped></style>