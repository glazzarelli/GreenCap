// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],

    colorMode: {
        classSuffix: '',
        preference: 'light', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
    },
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
