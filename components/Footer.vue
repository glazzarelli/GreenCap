<template>
    <footer
        class="footer p-5 sm:p-10 bg-base-200 text-base-content max-sm:justify-center items-center max-sm:grid-flow-row max-sm:justify-items-center">
        <div class="sm:footer-start items-center grid-flow-col ">
            <logo class="fill-current h-7 w-7" />
            <p>Copyright © 2023 GreenCap - All right reserved</p>
        </div>
        <div class="footer-end flex flex-col sm:flex-row  max-sm:grid-flow-row ">
            <div class="mx-2 max-sm:grid-flow-row ">
                <span class="footer-title mx-1">Newsletter</span>
                <label class="label">
                    <span class="label-text">Enter your email address</span>
                </label>
            </div>
            <div class="form-control w-80">
                <div class="relative">
                    <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                    <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
            </div>
        </div>
    </footer>
</template>


<script setup>

</script>

<style scoped></style>
  