<template>
    <div>
        <!-- header -->
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">

                <div>

                    <NuxtLink to="/" class="font-bold flex title-font items-center text-gray-900 mb-4 md:mb-0">
                        GreenCapital
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"
                            class="m-2 w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </NuxtLink>


                </div>
                <ul class="flex items-center gap-4">
                    <li>
                        <NuxtLink to="/areas">Areas</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/people">People</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- main -->
        <main class="container mx-auto p-4">
            <slot />
        </main>
        <!-- footer -->
        <footer
            class="w-full p-4 content-center bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <p>Copyright © 2023 GreenCapital. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>

</script>

<style>
.router-link-exact-active {
    color: #12b488;
}

h1 {
    margin-bottom: 20px;
    font-size: 36px;
}

h2 {
    margin-bottom: 10px;
    font-size: 24px;
}

p {
    margin: 20px 0;
}

footer {
    background-color: orange;
    flex-shrink: 0;
    text-align: center;
    margin-top: auto;
    border-top: 5px solid brown;
    padding: 10px;

    min-height: 1vh;
}
</style>

