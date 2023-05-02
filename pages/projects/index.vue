<!-- Projects page -->
<template>
    <div>
        <h1>Projects</h1>
        <p>Page with filter spotlight | all</p>

        <!-- START : Debug code -->
        <!-- <div class="form-container">
            <input id="dog-name" type="text" placeholder="Name" v-model="dogName">
            <input id="dog-breed" type="text" placeholder="Breed" v-model="dogBreed">
            <button id="add-btn-form" @click="saveDogForm">Add Card (Form values)</button>
        </div>

        <hr class="my-8">

        <div id="card-container">
            <Card v-for="dog of dogs" :title="dog.name" :subtitle="dog.breed" :link="'/dogs/' + dog.id" />
        </div> -->
        <!-- END : Debug code -->



        <div id="card-container">
            <ProjectCard v-for="project of projects" :project="project" />
        </div>

    </div>
</template>


<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
// const { data: dogs } = await useFetch(useRuntimeConfig().baseURL + '/server/dogs')
const { data: projects } = await useFetch(useRuntimeConfig().baseURL + '/server/projects')

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