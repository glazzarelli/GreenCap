<template>
    <footer
      class="footer p-5 sm:p-10 bg-base-200 text-base-content max-sm:justify-center items-center max-sm:grid-flow-row max-sm:justify-items-center border-t border-[primary]">
      <div class="flex flex-col sm:flex-row max-sm:grid-flow-row ">
        <div class="mx-2 max-sm:grid-flow-row ">
          <span class="footer-title mx-1">Newsletter</span>
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
        </div>
        <div class="form-control w-80">
          <div class="relative">
            <input
              type="text"
              v-model="email" 
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16"
            />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none" >Subscribe</button>
          </div>
          <p class="text-red-500 mt-2" v-if="validateEmail">{{ validateEmail }}</p>
        </div>
      </div>
      <div class="items-center footer-end grid-flow-col ">
        <IconLogo class="h-7" />
        <p>Copyright © 2023 GreenCap - All right reserved</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  
  const email = ref('');
  let emailError=ref('');
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //if we want the mail validation to be reactive use the commented code
    const validateEmail = computed(() => { 
        if (email.value === '') {
                return '';
            } 
            return emailRegex.test(email.value) ? '' : 'Please enter a valid email address';
        });
// if we dont want it reactive but triggered by the submit button use this code
//      const validateEmail = () => {
//         if (email.value === '') {
//             emailError.value = '';
//         } else if (!emailRegex.test(email.value)) {
//             emailError.value = 'Please enter a valid email address';
//         } else {
//             emailError.value = '';
//     }
// };
  </script>
  
  
  <style scoped></style>