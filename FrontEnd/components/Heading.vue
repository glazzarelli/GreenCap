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
const baseRoute = fullRoute.split('/').slice(0, 2).join('/');

// Compute the routes for each segment of the title
const routes = computed(() => {
    //hold the resulting routes
    const result = [];
    let path = '';
    // Loop through each segment of the title
    segments.value.forEach((segment, index) => {
        // If this is the first segment, use the base route
        if (index === 0) {
            path = baseRoute;
        // If this is the second segment, use the full route
        } else if (index === 1) {
            path = fullRoute;
        }
        // Add the current segment as a route with the current path
        result.push({ name: segment, path });
    });
    // Return the resulting array of routes
    return result;
});
</script>

<style scoped></style>