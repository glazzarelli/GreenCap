<!-- Areas page -->
<template>
    <div>
        <Heading title="Areas" class="mb-0" />

        <div class="card-container">
            <AreaCard v-for="area in areas" :key="area.id" :area="area" :path="`/areas/${area.id}`" />
        </div>

    </div>
</template>


<script setup>
const { data: areas } = await useFetch(useRuntimeConfig().public.baseURL + '/server/areas')
</script>

<style scoped></style>