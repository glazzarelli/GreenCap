<template>
    <div>
        <h1>Projects</h1>

        <div class="filters">
            <div class="filters-container">
                <ul class="filter-tabs flex">
                    <li class="nav-item filters-tab m-1">
                        <button @click="toggleSpotlight(true)" class="btn px-10"
                            :class="{ active: spotlight }">Spotlight</button>
                    </li>
                    <li class="nav-item filters-tab m-1">
                        <button @click="toggleAll()" class="btn px-16" :class="{ active: !spotlight }">All</button>
                    </li>
                    <li v-if="!spotlight">
                        <select v-model="selectedArea" label="Areas"
                            class="border border-base-content border-opacity-0 bg-base-100 pr-10 rounded-btn p-2 rounded m-1">
                            <option value="">All Areas</option>
                            <option v-for="area in areas" :value="area">{{ area }}</option>
                        </select>

                        <select v-model="selectedSupervisor"
                            class="border border-base-content border-opacity-0 bg-base-100 pr-10 rounded-btn p-2 rounded m-1">
                            <option :value="{ name: '', surname: '' }">All Supervisors</option>
                            <option v-for="supervisor in supervisors" :value="supervisor">
                                {{ supervisor.name }} {{ supervisor.surname }}
                            </option>
                        </select>

                    </li>
                </ul>
            </div>
        </div>

        <div id="card-container" v-if="filteredProjects.length > 0">
            <ProjectCard v-for="project of filteredProjects" :project="project" />
        </div>
        <div v-else>
            <p class="justify-center flex font-semibold">No projects found</p>
        </div>


    </div>
</template>


<script setup>
const { data: projects } = reactive(await useFetch(useRuntimeConfig().baseURL + '/server/projects'))

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
    // reset selected supervisors
    selectedSupervisor.value = { name: '', surname: '' };

}

const filteredProjects = computed(() => {
    let filtered = projects;

    if (selectedArea.value !== '') {
        filtered = filtered.filter(project => project.areas.some(area => area.name === selectedArea.value));
    }

    if (selectedSupervisor.value.name !== '' && selectedSupervisor.value.surname !== '') {
        filtered = filtered.filter(
            project =>
                project.person.name === selectedSupervisor.value.name &&
                project.person.surname === selectedSupervisor.value.surname
        );
    }

    if (spotlight.value) {
        // return the first 3 projects in the array without modifying the original array
        filtered = projects.slice(3, 6);
        // reset selected areas
        selectedArea.value = '';
        // reset selected supervisors
        selectedSupervisor.value = { name: '', surname: '' };
    }

    return filtered;
})
</script>

<style scoped>
/* change color botton active */
.btn.active {
    background-color: #12b488;
    color: white;
}

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


.filters {
    /* group the elements at the center */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>