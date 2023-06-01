<template>
    <div class="card">
        <NuxtLink :to="`/projects/${project.id}`">
            <img :src="`/images/projects/${project.image}`" alt="Startup Logo" class="card-img-top" />
            <div class="card-body">
                <h2 class="card-title">{{ project.name }}</h2>
                <p class="card-text">{{ project.descriptionShort }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const { project } = defineProps(['project'])
console.log('Project id passed to cardForPerson :', project.id);
console.log('Project image passed to cardForPerson :', project.image);
//console.log('Project areas :', project.areas);
//console.log('Project data passed to card :', project.person);
</script>

<style scoped>
.card {
    width: 25rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-img-top {
    width: 100%;
    height: 15rem;
    object-fit: cover;
}

.card-body {
    padding: 1rem;
}

.card-title {
    font-size: 1.25rem;
}

.card-text {
    margin-bottom: 1rem;
}

.card-subtitle {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
}
</style>