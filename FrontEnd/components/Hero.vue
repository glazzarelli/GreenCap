<template>
  <div class="hero w-full overflow-hidden">
    <!-- circles on the left -->
    <!-- <div class="absolute top-0 left-48 w-80 h-80 md:bg-lime-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob "></div>
    <div class="absolute bottom-0 left-48 w-80 h-80 lg:bg-greencap2 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-2000 "></div> -->
    <!-- circles on the right -->
    <!-- <div class="absolute top-0 right-9 w-72 h-72 lg:bg-lime-500 rounded-full filter blur-2xl opacity-80 animate-blob"></div>
    <div class="absolute bottom-0 right-14 w-72 h-72 lg:bg-greencap2 rounded-full filter blur-2xl opacity-80 animate-blob animation-delay-4000 "></div> -->
    <!-- content -->
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
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background: #000; */
  color: #000;
  /* background-image: url('../public/images/areas/green-backgroung.jpg');
  background-size: cover; /* This will ensure the image covers the entire div */
  /* background-position: center; This will center the image in the div */
  /* background-repeat: no-repeat; This will prevent the image from repeating */
  /* height: 100vh; You can adjust the height as needed */ 
  /* background: rgb(0,156,48);
  background: linear-gradient(90deg, rgba(0,156,48,1) 0%, rgba(8,209,173,1) 100%, rgba(30,111,24,0.8379726890756303) 100%); */
  
}

.hero__description {
  margin-top: 1em;
  font-size: 1.2em;
}
</style>
