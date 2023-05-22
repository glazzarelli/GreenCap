<!-- Project page -->
<!-- responsivness brakepoints 640-768-1024 -->
<template>
    <Heading :title="`Projects / ` + project.name" />
    <section class="px-4 sm:px-6 lg:px-8 py-14 mx-auto">
        <div class="flex flex-wrap">
            <figure class="lg:w-1/3 lg:min-w-[360px] w-full h-full object-center md:mx-auto lg:mt-6" alt="project image">
                <img :src="`/images/projects/${project.image}`" class="mx-auto object-cover rounded" />
            </figure>

            <div class="lg:w-2/3 w-full md:mx-auto md:mt-8 lg:px-5 py-0 mt-6 flex flex-wrap md:flex-nowrap">
                <!-- first column -->
                <div class="lg:w-2/3 w-full">
                    <p class="leading-relaxed mt-0">{{project.descriptionLong}}</p>
                    
                    <div class="col-start-5">
                    <h6 class="card-subtitle mb-2">Areas: </h6>
                    <div class="card-actions">
                    <div v-for="area in project.areas" :key="area">
                        <NuxtLink :to="`/areas/${area.id}`">
                            <div class="badge badge-secondary">
                                {{ area.name }}
                            </div>
                        </NuxtLink>
                    </div>

                    <p class="items-end" style="font-weight: bold; font-size: 18px;">
                    In this area the minimum investment is: {{ project.investment }} €
                    </p>
                </div>
             </div>
        </div>
                



                <!-- new column -->
                <div class="lg:w-1/3 w-full flex flex-col items-center mt-4">
                <h2 class="mb-5">Supervisor: {{ project.person.name }}  {{ project.person.surname }}</h2>
                    <nuxt-link :to="`/people/${project.person.id}`"> 
                        <div class="avatar">
                            <div class="w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img :src="`/images/people/${project.person.image}`" alt="Supervisor image" class="object-cover rounded-full"/>
                            </div>
                        </div>
                    </nuxt-link>
                    <div class="flex mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                        <p class="mt-0">team Members: </p>
                        
                        <div>
                        <ol>
                        <br>
                            <li v-for=" (member, index) in project.team" :key="member">
                                {{ member }}
                            </li>
                        </ol>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
