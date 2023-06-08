<template>
    <section class="opacity-0 blur[5px] translate-x[-110%] transition-all duration-800 ease-in-out hidden-element">
      <div>
        <Hero />
      </div>
    </section>
    <section class="opacity-0 blur[5px] translate-x[-110%] transition-all duration-800 ease-in-out hidden-element">
      <div>
        <AboutUs />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';  
  let hiddenElements = ref([]);
  
  onMounted(() => { 
    nextTick(() => {
      hiddenElements.value = Array.from(document.querySelectorAll("section.hidden-element")); 
      const observer = new IntersectionObserver(
        (entries) => { 
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.add('blur[0px]');
              entry.target.classList.add('translate-x-0');
              observer.unobserve(entry.target);
            } else {
              entry.target.classList.remove('opacity-100');
              entry.target.classList.remove('blur[0px]');
              entry.target.classList.remove('translate-x-0');
            }
          });
        }
      );
  
      hiddenElements.value.forEach((element) => {
        observer.observe(element);
      });
    });
  });

  //SEO
  definePageMeta({
   layout: 'custom',
   title: 'Home Page - Greencapital',
   description: 'Welcome to our website. Explore our themes and customize your experience.'
  });
  </script>
  
  