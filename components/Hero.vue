<template>
    <div class="hero">
        <div class="hero">
        <h1 class="text-3xl lg:text-4xl">GREEN CAPITAL</h1>
        <p class="mt-4 text-xl">Investing in green and sustainable projects.</p>
        </div>
    </div>
</template>
<script setup></script>

<style scoped>
.hero {
  height: 100vh;
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
  background: rgb(0,156,48);
  background: linear-gradient(90deg, rgba(0,156,48,1) 0%, rgba(8,209,173,1) 100%, rgba(30,111,24,0.8379726890756303) 100%);
    /* background: rgb(30,184,84);
background: radial-gradient(circle, rgba(30,184,84,1) 0%, rgba(42,42,42,1) 100%); */
}

.hero__description {
  margin-top: 1em;
  font-size: 1.2em;
}
</style>
