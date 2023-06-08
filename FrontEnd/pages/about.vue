<template>
    <section ref="sections">
    <Heading title="About Us"/>
    <div class="container flex flex-col items-center justify-center p-4 mx-auto space-y-4 sm:p-5">
        <p class="max-w-2xl text-center dark:text-gray-600 mt-2">Welcome to our website! 
        We are a joint venture committed to driving innovation and promoting sustainable solutions in the field of green technology. 
        Our mission is to accelerate the transition towards a greener and more environmentally conscious future by fostering collaboration, supporting groundbreaking projects, and connecting like-minded individuals and organizations. 
        At our joint venture, we bring together a diverse group of experts, entrepreneurs, and professionals who share a common passion for green technology and sustainable development. Our team is comprised of individuals with extensive experience in various sectors, including renewable energy, sustainable agriculture, waste management, and more.Through our platform, we aim to facilitate knowledge sharing, idea exchange, and collaboration among our members. 
        We provide a space for individuals and organizations to connect, engage in meaningful discussions, and explore partnership opportunities. By leveraging our collective expertise and resources, we strive to drive innovation and support the development of impactful projects.</p>
    </div>
    </section>

    <section ref="sections" class="py-2">
        <div class="container flex flex-col items-center justify-center p-4 mx-auto space-y-4 sm:p-5">
            <h1 class="text-4xl font-bold leading-none text-center sm:text-5xl">The logo</h1>
            <IconLogo class="h-20"/>
            <p class="max-w-2xl text-center dark:text-gray-600 mt-2">Our logo represents the essence and vision of our joint venture, embodying the union between technology and the environment to create an inseparable bond. 
            Let us take you on a journey behind the creation of our logo.The design begins with the letters "G" and "C," which are the initials of our joint venture's name. 
            These letters symbolize our commitment to green technology and the collaborative spirit that drives our work. The "C" represents the technological aspect, reflecting innovation, progress, and cutting-edge solutions. 
            On the other hand, the "G" represents the environment, signifying sustainability, nature, and our dedication to protecting the planet.In our logo, these two letters come together harmoniously, intertwining and overlapping. 
            The merging of the "G" and the "C" signifies the unbreakable bond we create between technology and the environment. It represents the synergy we foster, where advancements in technology are harnessed to address environmental challenges and promote sustainable practices.</p>
        </div>
    </section>

    <section ref="sections" class="py-2">
        <div class="container flex flex-col items-center justify-center p-4 mx-auto space-y-4 sm:p-5">
            <h1 class="text-4xl font-bold leading-none text-center sm:text-5xl ">Our team</h1>
            <p class="max-w-2xl text-center dark:text-gray-600 mt-2">Once upon a time, in the bustling corridors of an engineering university, four ambitious students came together to exchange ideas and dream of making a real impact on the world. 
            United by our passion for innovation and a shared vision of combining technology and sustainability, they embarked on a journey that would shape our lives forever.
            In the beginning, the path was not easy. We faced challenges, setbacks, and uncertainty, but our unwavering belief in our mission fueled our perseverance. 
            Through sleepless nights and countless brainstorming sessions, they nurtured our ideas, refined our strategies, and built a solid foundation for our joint venture.
            Our hard work soon began to bear fruit. With each passing day, the joint venture gained momentum, attracting attention from like-minded individuals who shared our vision. 
            From all corners of the globe, collaborators joined the cause, bringing diverse expertise and perspectives to the table. 
            The team grew to more than ten dedicated individuals, each contributing our unique skills and talents to the collective effort.</p>
        </div>   
    </section>
    <section ref="sections" class="py-2">    
        <div class="flex flex-row flex-wrap-reverse justify-center">
                <div class="flex flex-col justify-center m-8 text-center">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full "
                        src="https://avatars.githubusercontent.com/u/47924888?v=4">
                    <p class="text-xl font-semibold leading-tight">Gabriele Lazzarelli</p>
                    <p class="dark:text-gray-400">Computer Science Engineering</p>
                </div>
                <div class="flex flex-col justify-center m-8 text-center">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full "
                        src="https://avatars.githubusercontent.com/u/53084810?v=4">
                    <p class="text-xl font-semibold leading-tight">Luca Zanotto</p>
                    <p class="dark:text-gray-400">Computer Science Engineering</p>
                </div>
                <div class="flex flex-col justify-center m-8 text-center">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full "
                        src="https://avatars.githubusercontent.com/u/114062252?v=4">
                    <p class="text-xl font-semibold leading-tight">Francesca Arrigoni</p>
                    <p class="dark:text-gray-400">Mathematical Engineering</p>
                </div>
                <div class="flex flex-col justify-center m-8 text-center">
                    <img alt="" class="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full "
                        src="https://avatars.githubusercontent.com/u/102237556?v=4">
                    <p class="text-xl font-semibold leading-tight">Martina Del Basso</p>
                    <p class="dark:text-gray-400">Mathematical Engineering</p>
                </div>
            </div>
    </section>
</template>

<script setup>
let sections = ref([]);

onMounted(() => {
  nextTick(() => {//wait for the next DOM update cycle in order to wait for the sections to be rendered
    sections.value = Array.from(document.querySelectorAll("section")); // Get all sections
    //create an observer instance
    const observer = new IntersectionObserver( //we pass a callback function that will be called whenever the observed elements intersect with the viewport
      (entries) => { //we loop through the entries and check if the entry is intersecting with the vp if so we add the active class
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            //Stop observing the current target
            observer.unobserve(entry.target);
          }
        })
      },
      {
        threshold: 0.3,//percentage of the target's element that needs to be visible in the viewport in order to trigger the callback
      }
    )//end of observer
    
    //start observing the sections
    sections.value.forEach((section) => {
      observer.observe(section)
    })
  });
});

    // SEO
useHead({
        title: 'About Us - GreenCapital',
        meta: [
                // Add page description
                {
                    name: 'description',
                    content: 'Learn more about us and our joint venture committed to driving innovation in the green technology sector and promoting sustainable solutions.',
                },
                // Add page keywords
                {
                    name: 'keywords',
                    content: 'about us, green technology, sustainable solutions, joint venture',
                },
                // Set the page content type
                {
                    property: 'og:type',
                    content: 'website',
                },
                
            ],
        })
</script>

<style scoped>
        section {
        opacity: 0; /*make the section invisible */
        transform: translateY(20px); /*move the section 20px down */
        transition: all 1s ease; /*transition effect any change to opacity and trasfrom should happend in 1s with ease */
        }
        section.active {
        opacity: 1;
        transform: translateY(0px); /*move the section to original position */
        }
        .mt-8 {
            margin-top: 4rem; 
        }
        </style>
