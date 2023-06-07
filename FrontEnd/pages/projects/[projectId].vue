<!-- Project page -->
<!-- responsivness brakepoints 640-768-1024 -->
<template>
    <Heading :title="`Projects / ` + project.name" />
    <section class="px-4 sm:px-6 lg:px-8 py-14 mx-auto">
        <div class="flex flex-wrap">
            <figure class="lg:w-1/3 lg:min-w-[360px] w-full h-full object-center md:mx-auto lg:mt-6" alt="project image">
                <img :src=imagePath class="mx-auto object-cover rounded" alt="project image"/>
            </figure>
            <div class="lg:w-2/3 w-full md:mx-auto md:mt-8 lg:px-5 py-0 mt-4 flex flex-wrap md:flex-nowrap">
                <!-- first column -->
                <div class="lg:w-2/3 w-full">
                    <p class="leading-relaxed mt-0">{{project.descriptionLong}}</p>
                    <div class="col-start-5">
                    <h2 class="card-subtitle mb-2">Areas: </h2>
                    <div class="card-actions">
                    <div v-for="area in project.areas" :key="area">
                        <NuxtLink :to="`/areas/${area.id}`">
                            <div class="badge badge-secondary">
                                {{ area.name }}
                            </div>
                        </NuxtLink>
                        
                    </div>
                    <p class="items-end" style="font-weight: bold; font-size: 18px;">
                    <br>
                        
                        In this project the minimum investment is: {{ project.investment }} €
                    </p>
                </div>
             </div>
        </div>
                <!-- new column -->
                <div class="lg:w-1/3 w-full flex flex-col items-center mt-3">
                <h2 class="mb-5">Supervisor: {{ project.person.name }}  {{ project.person.surname }}</h2>
                    <nuxt-link :to="`/people/${project.person.id}/`"> 
                        <div class="avatar">
                            <div class="w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img :src=imagePathSupervisor alt="Supervisor image" class="object-cover rounded-full"/>
                            </div>
                        </div>
                    </nuxt-link>
                    <br>
                    <p class="mt-0">Team Members: </p> 
                    <div class="flex mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                                            
                        <ol>
                            <li v-for=" (member, index) in project.team" :key="member">
                                {{ member }}
                            </li>
                        </ol>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import useImages from '@/composables/useImages';
const { projectId } = useRoute().params;
const { data: project } = await useFetch(useRuntimeConfig().public.baseURL + `/projects/${projectId}`);
if(!project.value){
  //inside the createError function we can pass an object used as a prop by Error.vue
  throw createError({statusCode: 404, statusMessage: 'Project not found', fatal: true});
}

const imagePath = useImages('projects', project.value.name);
console.log("this is the image to be searched"+ project.value.person.image.replace('.jpg', ''));
const imagePathSupervisor = useImages('people',  project.value.person.image.replace('.jpg', ''));

useHead({
            title: 'Projects - GreenCapital',
            meta: [
                // Add page description
                {
                    name: 'description',
                    content: 'Discover our innovative projects that showcase our commitment to excellence and innovation. Our projects encompass a wide range of industries and demonstrate our expertise in delivering exceptional solutions. ',
                },
                // Add page keywords
                {
                    name: 'keywords',
                    content: 'innovations, expertise, team, success',
                },
                
            ],
        })
</script>

<style scoped></style>
