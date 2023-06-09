<template>
    <div>
        <Heading title="Contact Us" />
        <div class="container mx-auto px-5 flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe class="absolute inset-0" style="filter: grayscale(1) contrast(1.2) opacity(0.4);" title="map"
                    marginheight="0" marginwidth="0" scrolling="no"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Politecnico,Milan+Italy&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    width="100%" height="100%" frameborder="0"></iframe>
                <div class="bg-base-100 relative flex flex-wrap py-6 rounded shadow-md">
                    <div class="lg:w-1/2 px-6">
                        <h2 class="title-font font-semibold tracking-widest text-xs" style=" opacity: 1;">ADDRESS</h2>
                        <p class="mt-1 font-bold opacity-100">piazza Leonardo da Vinci, 42 MILANO (MI), Italia</p>
                    </div>
                    <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 class="title-font font-semibold tracking-widest text-xs " style=" opacity: 1;">EMAIL</h2>
                        <a class=" leading-relaxed font-bold opacity-100">example@email.com</a>
                        <h2 class="title-font font-semibold tracking-widest text-xs mt-4 " style=" opacity: 1;">PHONE</h2>
                        <p class="leading-relaxed font-bold opacity-100">123-456-7890</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-base-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-lg mb-1 font-bold title-font ">Feedback</h2>
                <p class="leading-relaxed mb-5 ">Please leave us a note and we'll get back to you via email
                </p>
                <div class="relative mb-2">
                    <label for="email" class="leading-7 text-sm ">Email</label>
                    <input type="email" id="email" name="email" v-model="email" @input="validateEmail"
                        class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <p class="text-red-500 mt-2" v-if="showEmailError">{{ emailError }}</p>
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm ">Message</label>
                    <textarea id="message" name="message"
                        class="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button class="btn btn-accent font-bold" @click="openModal">SEND FEEDBACK</button>
                <div class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': showModal }">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Feedback sent!</h3>
                        <p class="py-4">Thank for your feedback, it helps improve our services.</p>
                        <div class="modal-action">
                            <button class="btn btn-success" @click="closeModal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                <p class="text-xs font-medium text-900 mt-3">You will get an answer as soon as possible
                    by our team.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { email, emailError } = useEmailValidation();

onMounted(() => {
    useHead({
        title: 'Contact Us - GreenCapital',
        meta: [
            // Add page description
            {
                name: 'description',
                content: 'Contact us for inquiries, feedback, or any other questions you may have. Get in touch with our team and we will be happy to assist you.',
            },
            // Add page keywords
            {
                name: 'keywords',
                content: 'contact us, inquiries, feedback, customer support',
            },

        ],
    })
})

const showModal = ref(false);
const showEmailError = ref(false);

function openModal() {
    // check the email validation
    if (emailError.value) {
        showEmailError.value = true;
        return;
    } else {
        showEmailError.value = false;
        // clear text email field
        email.value = '';
        // clear text message field
        document.getElementById('message').value = '';
        // toggle modal
        showModal.value = !showModal.value;
    }
}

function closeModal() {
    showModal.value = !showModal.value;
}

</script>

<style scoped></style>
