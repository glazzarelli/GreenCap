<!-- People page -->
<template>
    <div>
      <h1>People</h1>
      <p>Page with filter spotlight | all</p>
      <div id="card-container">
            <PersonCard v-for="person in people" :person="person" :key="person.id"/>
      </div>
    </div>
  </template>

<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: people } = await useFetch(useRuntimeConfig().public.baseURL + '/server/people')
console.log('People data:', people);
</script>

<style scoped>
#card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    gap: 20px;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
}

.form-container {
    width: 90%;
    border-radius: 10px;
    border: 2px solid brown;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: flex-start;
    gap: 20px;

    background-color: burlywood;
    padding: 20px;
}
</style>