<template>
  <section class="bg-gray-100 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="py-2 mt-2" :class="{ 'slide-in-right': isTextInView }">
          <h2 class="text-3xl font-semibold text-gray-800 mb-6 slide-in">
            Why choose GreenCapital
          </h2>
          <p class="text-gray-600 text-lg my-auto" ref="textParagraph">
            {{ aboutData.description }}
          </p>
        </div>
        <div>
          <h2 class="text-3xl lg:mt-4 lg:ml-20 font-semibold text-gray-800 mb-6 slide-in">Our investments so far</h2>
          <div class="mt-4 mb-18">
            <Chart/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Chart from '@/components/Chart.vue';
const aboutData = {
  description: "We are a venture capital firm focused on helping startups grow and succeed. Our team brings decades of experience in various industries, and we are passionate about supporting the next generation of entrepreneurs.",
  image: "images/other/chart3.png"
}

const textParagraph = ref(null);
const isTextInView = ref(false);

const checkScroll = () => {
  if (!isTextInView.value && textParagraph.value) {
    const textRect = textParagraph.value.getBoundingClientRect();
    isTextInView.value = textRect.top >= 0 && textRect.bottom <= window.innerHeight;
  }

  if (isTextInView.value) {
    window.removeEventListener('scroll', checkScroll);
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});

</script>

<style scoped>
@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slide-in-right {
  animation: slide-in-right 2s forwards;
}

.fade-in {
  animation: fade-in 2s forwards;
}
</style>