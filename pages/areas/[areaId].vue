<template>
  <div>
    <h1>hello world</h1>
    <p v-if="response">This is the passed area: {{ response.name }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
  const { areaId } = useRoute().params
  //console.log(`server/area/${areaId}`);
  // const { data: areaX } = await useFetch(useRuntimeConfig().public.baseURL + `/server/area/${areaId}`);
  // console.log('Area data:', areaX);
  const response = ref(null);
  const isLoading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const res = await fetch(useRuntimeConfig().public.baseURL + `/server/area/${areaId}`);
      const data = await res.json();
      console.log('Response data:', data);
      response.value = data;
      isLoading.value = false;
    } catch (err) {
      console.error('Error fetching data:', err);
      error.value = err.message;
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });
</script>