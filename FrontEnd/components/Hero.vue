<template>
      <div class="hero">
        <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-2 w-72 h-72 bg-greencap2 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob "></div>
            <div class="absolute top-0 -right-2 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-4 left-40 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-4000"></div>
            <div class="absolute -bottom-6 left-30 w-72 h-72 bg-greencap rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-6000"></div>
          <div class="m-8 relative space-y-4">
            <h1 class="text-3xl lg:text-4xl">GREEN CAPITAL</h1>
            <p class="mt-4 text-xl">Investing in green and sustainable projects.</p>
          </div>
        </div>
      </div>
</template>
<script setup></script>

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
  /* background: rgb(30,184,84); */
  /* background: radial-gradient(circle, rgba(30,184,84,1) 0%, rgba(42,42,42,1) 100%); */
}

.hero__description {
  margin-top: 1em;
  font-size: 1.2em;
}
</style>
