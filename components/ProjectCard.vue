<template>
    <div class="card">
        <img :src="image" alt="Startup Logo" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
            <h6 class="card-subtitle mb-2">Team Members:</h6>
            <ul>
                <li v-for="member in team" :key="member">{{ member }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        team: {
            type: Array,
            required: true,
        },
        // short description
        description: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
.card {
    width: 18rem;
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
