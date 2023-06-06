<!-- Areas page -->
<template>
    <div>
        <Heading title="Areas" class="mb-0" />
        <div class="card-container">
            <AreaCard v-for="area in areas" :key="area.id" :area="area" :path="`/images/areas/${area.image}`"/>
        </div>
    </div>
</template>

<script setup>
const { data: areas } = await useFetch(useRuntimeConfig().public.baseURL + '/areas')
console.log("this is runtime config public baseurl: "+ useRuntimeConfig().public.baseURL)
//a loop that prints all the areas path requested

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
                // Add your website as the author
                {
                    name: 'Gabriele Lazzarelli, Luca Zanotto, Martina Del Basso, Francesca Arrigoni',
                    content: 'GreenCapital',
                },
            ],
        })
</script>
<style scoped></style>