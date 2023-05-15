<template>
    <div>
        <Heading title="Contact Us" />
        <div class="container mx-auto px-5 flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe class="absolute inset-0" style="filter: grayscale(1) contrast(1.2) opacity(0.4);" title="map"
                    marginheight="0" marginwidth="0" scrolling="no"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    width="100%" height="100%" frameborder="0"></iframe>
                <div class="bg-base-100 relative flex flex-wrap py-6 rounded shadow-md">
                    <div class="lg:w-1/2 px-6">
                        <h2 class="title-font font-semibold tracking-widest text-xs">ADDRESS</h2>
                        <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                    </div>

                    <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 class="title-font font-semibold tracking-widest text-xs">EMAIL</h2>
                        <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                        <h2 class="title-font font-semibold tracking-widest text-xs mt-4">PHONE</h2>
                        <p class="leading-relaxed">123-456-7890</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-base-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-lg mb-1 font-medium title-font">Feedback</h2>
                <p class="leading-relaxed mb-5 ">Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div class="relative mb-2">
                    <label for="email" class="leading-7 text-sm ">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        v-model="email"
                        @input="validateEmail"
                        class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <p class="text-red-500 mt-2" v-if="emailError">{{ emailError }}</p>
                </div>
                <div class="relative mb-2">
                    <label for="email" class="leading-7 text-sm ">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        v-model="email"
                        @input="validateEmail"
                        class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        <p class="text-red-500 mt-2" v-if="emailError">{{ emailError }}</p>
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm ">Message</label>
                    <textarea id="message" name="message"
                        class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button class="btn btn-accent">SEND FEEDBACK</button>
                <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral
                    artisan.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import useEmailValidation from '@/composables/useEmailValidation';
    const { email, emailError } = useEmailValidation();
</script>

<style scoped></style>