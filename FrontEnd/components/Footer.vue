<template>
  <footer
    class="footer p-5 bg-base-200 text-base-content max-sm:justify-center items-center max-sm:grid-flow-row max-sm:justify-items-center border-t border-[primary]">
    <div class="flex flex-col sm:flex-row max-sm:grid-flow-row w-full lg:max-w-xl">
      <div class="mx-2 max-sm:grid-flow-row">
        <span class="footer-title mx-1 font-bold text-lg" style="opacity: 1;">Newsletter</span>
        <label class="label">
          <span class="label-text">Enter your email address</span>
        </label>
      </div>
      <div class="form-control w-full my-auto">
        <div class="relative">
          <input type="text" v-model="email" placeholder="username@site.com"
            class="input input-bordered items-center px-1 md:px-3 pr-1 w-full" />
          <button class="btn btn-secondary absolute top-0 right-0 rounded-l-none" style="opacity: 1;"
            @click="openModal">Subscribe</button>
          <div class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': showModal }">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Subscribed to the Newsletter!</h3>
              <p class="py-4">We appreciate your interest, you will receive our weekly digest. To unsubscribe,
                click the "unsubscribe" button.</p>
              <div class="modal-action">
                <button class="btn btn-warning">Unsubscribe</button>
                <button class="btn btn-success mx-auto" @click="closeModal">
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
        <label class="label">
          <span class="label-text-alt text-error" v-if="showEmailError">{{ emailError }}</span>
        </label>
      </div>
    </div>

    <div class="items-center footer-end grid-flow-col">
      <IconLogo class="h-7" />
      <p>Copyright © 2023 GreenCap - All right reserved</p>
    </div>
  </footer>
</template>

<script setup>
const { email, emailError } = useEmailValidation();

const showModal = ref(false);
const showEmailError = ref(false);

function openModal() {
  if (emailError.value) {
    showEmailError.value = true;
    return;
  } else {
    showEmailError.value = false;
    // clear text email field
    email.value = '';
    showModal.value = !showModal.value;

  }
}

function closeModal() {
  showModal.value = false;
}
</script>

  
  
<style scoped>
.footer-title,
.label-text,
.btn,
.footer-end p {
  font-weight: bold;

}
</style>
