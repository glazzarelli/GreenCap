<!-- Areas page -->
<template>
    <div>
        <Heading title="Areas" class="mb-0" />
        <div class="card-container">
            <AreaCard v-for="area in areas" :key="area.id" :area="area"/>
        </div>
    </div>
</template>

<script setup>
const { data: areas } = await useFetch(useRuntimeConfig().public.baseURL + '/areas')

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
<style scoped></style>
