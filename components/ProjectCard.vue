<template>
    <div class="card">
        <img src="~/assets/images/placeholder.png" alt="Startup Logo" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.descriptionShort }}</p>

            <p class="card-subtitle">Supervisor:</p>
            <p>{{ project.person.name }} {{ project.person.surname }}</p>
            
            <p class="card-subtitle">Areas:</p>
            <div v-for="area in project.areas" :key="area"
                class="m-px center relative inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                {{ area.name }}
            </div>
            <!-- <h6 class="card-subtitle mb-2">Team Members:</h6>
            <ul>
                <li v-for="member in project.team" :key="member">{{ member }}</li>
            </ul> -->
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project'])
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
