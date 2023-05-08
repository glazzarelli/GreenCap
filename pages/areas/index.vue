<!-- Areas page -->
<!-- Projects page -->
<template>
    <div>
        <h1>Areas</h1>
        <p>Page with filter spotlight | all</p>

        <div id="card-container">
            <AreaCard v-for="area in areas" :key="area.id" :area="area" :path="`/areas/${area.id}`" />
        </div>

    </div>
</template>


<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: areas } = await useFetch(useRuntimeConfig().public.baseURL + '/server/areas')
//const { data: test } = await useFetch(useRuntimeConfig().baseURL + '/server/projects')
//console.log('Area data:', areas)

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