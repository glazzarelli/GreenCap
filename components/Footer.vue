<template>
  <footer
    class="footer p-5 sm:p-10 bg-neutral text-base-content max-sm:justify-center items-center max-sm:grid-flow-row max-sm:justify-items-center border-t border-[primary]">
    <div class="flex flex-col sm:flex-row max-sm:grid-flow-row ">
      <div class="mx-2 max-sm:grid-flow-row ">
        <span class="footer-title mx-1">Newsletter</span>
        <label class="label">
          <span class="label-text">Enter your email address</span>
        </label>
      </div>
      <div class="form-control w-80">
        <div class="relative">
          <input type="text" v-model="email" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
          <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
        <p class="text-red-500 mt-2" v-if="emailError">{{ emailError }}</p>
      </div>
    </div>
    <div class="items-center footer-end grid-flow-col ">
      <IconLogo class="h-7" />
      <p>Copyright © 2023 GreenCap - All right reserved</p>
    </div>
  </footer>
</template>

<script setup>
import useEmailValidation from '@/composables/useEmailValidation';
const { email, emailError } = useEmailValidation();
</script>

  
  
<style scoped></style>