<template>
  <section class="py-12 bg-primary-content px-4">
    <div class="max-w-7xl mx-auto opacity-0" :class="{ 'slide-in-right': isTextInView }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- The left column with a title, a paragraph and an animation -->
        <div class="py-2 mt-2">
          <h2 class="text-3xl font-semibold mb-6">
            Why choose GreenCapital
          </h2>
          <p class="text-lg my-auto" ref="textParagraph">
            We are a venture capital firm focused on helping startups grow and succeed. Our team brings decades of experience in various industries, and we are passionate about supporting the next generation of entrepreneurs.
          </p>
        </div>
        <!-- The right column with a title, a chart and some margin -->
        <div>
          <h2 class="text-3xl lg:mt-4 lg:ml-20 font-semibold mb-6">Our investments so far</h2>
          <div class="inline-flex items-center space-x-2 mr-2 " v-for="(label, index) in labels" :key="index">
            <div class="w-5 h-5" :style="{ backgroundColor: colors[index] }"></div>
            <span>{{ label }}</span>
          </div>
          <div class="mt-4 mb-18">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const labels= ['Renewable energy', 'Sustainable transport', 'Green and smart building', 'Sustainable agriculture'];
const colors= ['rgb(52, 77, 103)', 'rgb(110, 204, 175)', 'rgb(173, 231, 146)', 'rgb(243, 236, 176)'];
// Refs  variables for the animation
const textParagraph = ref(null);
const isTextInView = ref(false);

const checkScroll = () => {
  // Check if the text paragraph is in view and set the reactive variable accordingly
  if (!isTextInView.value && textParagraph.value) {
    const textRect = textParagraph.value.getBoundingClientRect();
    isTextInView.value = textRect.top >= 0 && textRect.bottom <= window.innerHeight;
  }
  // Remove the scroll event listener if the text is in view
  else if (isTextInView.value) {
    window.removeEventListener('scroll', checkScroll);
  }
};

// Add the scroll event listener and check if the text is in view on mount
onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

// Remove the scroll event listener on unmount
onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});

</script>

<style scoped>
/* Animatio keyframes */
@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slide-in-right 2s forwards;
}
.custom-legend {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
}

.color-box {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>