import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore

export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
        transpile: ['@headlessui/vue'],
    }
})
