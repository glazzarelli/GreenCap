<template>
    <div>
        <!-- header -->
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">GreenCapital</NuxtLink>
                <ul class="flex gap-4">
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

