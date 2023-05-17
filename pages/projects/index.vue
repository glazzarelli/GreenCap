<template>
    <div>
        <Heading title="Projects" />

        <div class="flex flex-col items-center mb-10 mx-10 sm:mx-20 ">

            <div class="btn-group w-3/5 lg:w-2/4 btn-group-horizontal justify-center">
                <button @click="toggleSpotlight(true)" class="btn btn-outline btn-block text-lg"
                    :class="{ 'btn-active': spotlight }">SPOTLIGHT</button>
                <button @click="toggleAll()" class="btn btn-outline btn-block text-lg"
                    :class="{ 'btn-active': !spotlight }">ALL</button>
            </div>

            <div v-if="!spotlight" class="form-control sm:max-w-sm">
                <label class="label">
                    <span class="label-text">Select by area:</span>
                </label>
                <select v-model="selectedArea" class="select select-bordered w-full" label="Areas">
                    <option value="">All Areas</option>
                    <option v-for="area in areas" :value="area">{{ area }}</option>
                </select>
            </div>
        </div>

        <div class="card-container" v-if="filteredProjects.length > 0">
            <ProjectCard v-for="project of filteredProjects" :project="project" />
        </div>
        <div v-else>
            <p class="justify-center flex font-semibold">No projects found</p>
        </div>


    </div>
</template>


<script setup>
const { data: projects } = reactive(await useFetch(useRuntimeConfig().public.baseURL + '/server/projects'))

// get all areas
const areas = computed(() => {
    const allAreas = projects.flatMap(project => project.areas.map(area => area.name))
    return [...new Set(allAreas)]
})

// selected area
const selectedArea = ref('')

// get all supervisors
const supervisors = computed(() => {
    if (!projects) {
        return []
    }
    const allSupervisors = projects.map(project => ({
        name: project.person.name,
        surname: project.person.surname,
    }));
    return allSupervisors.filter(
        (supervisor, index, self) =>
            index ===
            self.findIndex(
                s => s.name === supervisor.name && s.surname === supervisor.surname
            )
    );
});

// selected supervisor
const selectedSupervisor = ref({ name: '', surname: '' });

// spotlights
const spotlight = ref('true')

function toggleSpotlight(value) {
    spotlight.value = value
}

function toggleAll() {
    spotlight.value = false
    // reset selected areas
    selectedArea.value = '';
}

const filteredProjects = computed(() => {
    let filtered = projects;

    if (selectedArea.value !== '') {
        filtered = filtered.filter(project => project.areas.some(area => area.name === selectedArea.value));
    }


    if (spotlight.value) {
        // return the first 3 projects in the array without modifying the original array
        filtered = projects.slice(3, 6);
        // reset selected areas
        selectedArea.value = '';
    }

    return filtered;
})
</script>

<style scoped></style>