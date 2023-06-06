<template>
    <div class="flex items-center justify-center">
        <h1>
            <span :key="index" v-for="(route, index) in routes">
                <NuxtLink class="link" :to="`${route.path}`">{{ route.name }}</NuxtLink>
                <span v-if="index < routes.length - 1"> / </span>
            </span>
        </h1>
    </div>
</template>

<script setup>
// Define props for the component
const { title } = defineProps({
    title: String,
});

// Compute the segments of the title by splitting it at each ' / '
const segments = computed(() => title.split(' / '));

// Get the full route and base route for the current page
const fullRoute = useRoute().fullPath;
const baseRoute = fullRoute.split('/').slice(0, 2).join('/') + '/';
console.log('Full route: ', fullRoute);
console.log('Base route: ', baseRoute);

// Compute the routes for each segment of the title
const routes = computed(() => {
    const result = [];
    let path = '';
    segments.value.forEach((segment, index) => {
        if (index === 0) {
            path = baseRoute;
        } else if (index === 1) {
            path = fullRoute;
        }
        result.push({ name: segment, path });
    });
    return result;
});
</script>

<style scoped>
/* Add your styles here */
</style>