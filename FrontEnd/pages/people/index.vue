<!-- People page -->
<template>
  <div>
    <Heading title="People"/>
    <div class="card-container">
      <PersonCard v-for="person in people" :person="person" :key="person.id" />
    </div>
  </div>
</template>

<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
// console.log("this is the base url"+useRuntimeConfig().public.baseURL)
// console.log(useRuntimeConfig().public.baseURL + '/people')
const { data: people } = await useFetch(useRuntimeConfig().public.baseURL + '/people')

useHead({
            title: 'People - GreenCapital',
            meta: [
                // Add page description
                {
                    name: 'description',
                    content: 'The purpose of a people page is to provide visitors with an overview of the individuals involved in the organization or community, highlighting their expertise, achievements, and contributions.',
                },
                // Add page keywords
                {
                    name: 'keywords',
                    content: 'people, expertise, team, profiles',
                },
                
            ],
        })
</script>

<style scoped></style>
