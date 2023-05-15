<!-- Project page -->
<template>
    <Heading :title="`Projects / ` + project.name" />
    <div>
        <div class="grid grid-cols-4 grid-rows-2 gap-12">
            <div class="col-span-2">
                <div
                    class="relative grid h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div
                        class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div
                            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
                        </div>
                    </div>
                    <div class="relative p-6 py-14 px-6 md:px-12">
                        <h5
                            class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">

                            <p> {{ project.name }}</p>
                        </h5>
                        <img alt="startup logo" src="~/assets/images/placeholder.png"
                            class="relative inline-block p-1  h-[200px] w-[200px] rounded-full border-2 border-white object-cover object-center" />
                    </div>
                </div>
            </div>
            <div class="col-start-3">
                <h6 class="card-subtitle mb-2">Team Members:</h6>
                <ul>
                    <li v-for="member in project.team" :key="member">{{ member }}</li>
                </ul>
            </div>
            <div class="col-start-4">
                <h6 class="card-subtitle mb-2">Supervisor: </h6>
                {{ project.person.name }} {{ project.person.name }}

            </div>
            <div class="col-span-4 row-start-2">{{ project.descriptionLong }}</div>
        </div>

    </div>
</template>

<script setup>
//passed via link
const { projectId } = useRoute().params;
const { data: project } = await useFetch(useRuntimeConfig().public.baseURL + `/server/projects/${projectId}`);
if(!project.value){
  //inside the createError function we can pass an object used as a prop by Error.vue
  throw createError({statusCode: 404, statusMessage: 'Project not found', fatal: true});
}
</script>

<style scoped></style>