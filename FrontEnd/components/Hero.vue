<template>
  <div class="hero w-full overflow-hidden">
    <div class="relative w-full max-w-lg">
      <!-- circles in the middle -->
      <div class="absolute top-2 left-0 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob "></div>
      <div class="absolute top-3 right-0 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-4 left-56 w-80 h-80 bg-lime-500 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-4000"></div>
      <div class="absolute bottom-3 left-31 w-80 h-80 bg-lime-500 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob  animation-delay-6000"></div>
      <div class="m-4 relative space-y-4 max-w-full">
        <h1 class="text-3xl lg:text-4xl">GREEN CAPITAL</h1>
        <p class="mt-4 text-xl">Investing in green and sustainable projects.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
}

.hero__description {
  margin-top: 1em;
  font-size: 1.2em;
}
</style>
