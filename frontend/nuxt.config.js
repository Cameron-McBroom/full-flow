export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    server: {
        port: 3000,
        host: "0.0.0.0"
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Uplift Painting & Decorating | Quality Painting Sydney',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            // {
            //     rel: 'stylesheet',
            //     href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
            // }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/v-mq.js',
        // '~/plugins/v-markdown.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontawesome',

    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/markdownit',
        'nuxt-lazy-load'
    ],

    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    // build: {
    //     optimization: {
    //         splitChunks: {
    //             cacheGroups: {
    //                 vendor: {
    //                     test: /[\\/]node_modules[\\/](!markdown-it)[\\/]/,
    //                     name: 'vendor',
    //                     chunks: 'all',
    //                 }
    //             }
    //         }
    //     }
    // },

    fontawesome: {
        icons: {
            solid: ['faChevronRight', 'faPhone', 'faQuoteLeft', 'faMessage', 'faCaretDown', 'faAt'],
            brands: ['faFacebook', 'faInstagram',]
        }
    },

    axios: {
        baseURL: 'http://localhost:1337/api'
    },

    publicRuntimeConfig: {
        axios: {
            baseURL: process.env.API_BASE_URL
        }
    },

    purgeCSS: {
        whitelistPatterns: [/svg.*/, /fa.*/]
    },

}
