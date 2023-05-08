// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    serverHandlers: [
        {
            route: '/server',
            handler: '~/server/myServer/index.js',
            middleware: true
            
        }
    ],
    ssr: true,
    runtimeConfig: {
        public: {
            baseURL: "http://localhost:3000"
        }
    }

})
