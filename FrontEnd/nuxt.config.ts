const baseURL = "/GreenCap";
const baseURLforSEO = "https://glazzarelli.github.io/GreenCap/";

export default defineNuxtConfig({
    app: {
        head: {
            title: 'GreenCapital',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                // Mobile Friendly Meta Tags
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'GreenCap is a venture capital firm committed to investing in sustainable start-ups that are creating positive environmental and social impact.'
                },
                // Tells Internet Explorer to use the latest rendering engine
                // available to the browser (e.g. Edge)
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                },
                // Declares the character set for the page, ensuring proper rendering in browsers
                {
                    'http-equiv': 'Content-Type',
                    content: 'text/html; charset=utf-8'
                },
                // Disables automatic detection and formatting of possible phone numbers
                {
                    name: 'format-detection',
                    content: 'telephone=no'
                },
                // Allows search engines to index the website
                {
                    name: 'robots',
                    content: 'index, follow'
                },
                // Open Graph / Facebook Meta Tags
                {
                    property: 'og:title',
                    content: 'GreenCapital'
                },
                {
                    property: 'og:description',
                    content: 'GreenCap is a venture capital firm committed to investing in sustainable start-ups that are creating positive environmental and social impact.'
                },
                {
                    property: 'og:image:secure_url',
                    content: `${baseURLforSEO}/greencap-logo.png`
                },
                {
                    property: 'og:image:type',
                    content: 'image/png'
                },
                {
                    property: 'og:image:width',
                    content: '601'
                },
                {
                    property: 'og:image:height',
                    content: '601'
                },
                {
                    property: 'og:site_name',
                    content: 'GreenCapital'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                // Twitter Meta Tags
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:site',
                    content: '@GreenCapit25116'
                },
                {
                    name: 'twitter:title',
                    content: 'GreenCap | Sustainable Venture Capital'
                },
                {
                    name: 'twitter:description',
                    content: 'GreenCap is a venture capital firm committed to investing in sustainable start-ups that are creating positive environmental and social impact.'
                },
                {
                    name: 'twitter:image',
                    content: `${baseURLforSEO}/greencap-logo.png`
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: `${baseURL}/favicon.ico`
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: `${baseURL}/apple-touch-icon.png`
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: `${baseURL}/favicon-32x32.png`
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: `${baseURL}/favicon-16x16.png`
                },
                {
                    rel: 'manifest',
                    href: `${baseURL}/site.webmanifest`
                },
            ]
        },

        baseURL: baseURL,
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],


    colorMode: {
        classSuffix: '',
        preference: 'light', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
    },
    ssr: true,
    runtimeConfig: {
        public: {
            baseURL: "http://localhost:3001",
        }
    },
})
