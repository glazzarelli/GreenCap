<!-- People page -->
<template>
  <div>
    <Heading title="People" />
    <div class="card-container">
      <PersonCard v-for="person in people" :person="person" :key="person.id" />
    </div>
  </div>
</template>

<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: people } = await useFetch(useRuntimeConfig().public.baseURL + '/server/people')
</script>

<style scoped></style>