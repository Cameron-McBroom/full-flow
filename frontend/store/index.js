
export const state = () => ({
    global: {},
    services: [],
    serviceAreas: [],
    images: {}
})

export const getters = {}

export const mutations = {
    setServices(state, payload) {
        state.services = payload;
    },
    setServiceAreas(state, payload) {
        state.serviceAreas = payload;
    },
    setImages(state, payload) {

        payload.forEach(i => {
            state.images[i.id] = i
        })
    },
    setGlobal(state, payload) {
        state.global = payload
        state.global.logo = payload.logo.data.attributes.url
    }
}

export const actions = {

    async fetchGlobal({ commit }) {
        try {
            const res = await this.$axios.$get("/global?populate=logo");
            commit('setGlobal', res.data.attributes);
        } catch (e) {
            console.log("[Vuex] Error fetching global site info", e)
        }
    },

    async fetchImages({ commit }) {
        try {
            const res = await this.$axios.$get("/images?populate=image")

            const images = res.data.map(item => {
                const mediumImage = item.attributes.image.data.attributes.formats.medium
                const largeImage = item.attributes.image.data.attributes.formats.large
                const smallImage = item.attributes.image.data.attributes.formats.small

                return {
                    id: item.id,
                    alt: item.attributes.description,
                    url: this.$parseUrl(item.attributes.image.data.attributes.url),
                    large: {
                        url: this.$parseUrl(largeImage.url),
                        width: largeImage.width,
                        height: largeImage.height
                    },
                    medium: {
                        url: this.$parseUrl(mediumImage.url),
                        width: mediumImage.width,
                        height: mediumImage.height
                    },
                    small: {
                        url: this.$parseUrl(smallImage.url),
                        width: smallImage.width,
                        height: smallImage.height
                    },
                }
            });

            commit('setImages', images)
        }
       catch (e) {
            console.log(e);
       }
    },

    async fetchServices({commit}) {
        // Fetch services
        try {
            const res = await this.$axios.$get('/services?populate=coverImage');
            const services = res.data.map(i => {
                return {
                    path: i.attributes.name.replace(/ /g, '-').toLowerCase(),
                    name: i.attributes.name,
                    shortName: i.attributes.shortName,
                    shortDesc: i.attributes.descriptionShort,
                    longDesc: i.attributes.descriptionLong,
                    imageUrl: this.$parseUrl(i.attributes.coverImage.data.attributes.formats.small.url)
                }
            })
            commit('setServices', services);
        } catch (e) {
            console.log(e);
        }
    },

    async fetchServiceAreas({commit}) {
        try {
            const res = await this.$axios.$get('/service-areas');
            const areas = res.data.map(i => {
                return {
                    path: i.attributes.area.replace(' ', '-').toLowerCase(),
                    name: i.attributes.area,
                    description: i.attributes.description
                }
            })
            commit('setServiceAreas', areas);
        } catch (e) {
            console.log(e);
        }
    },

    async nuxtServerInit (context, { req }) {
        await context.dispatch('fetchServices');
        await context.dispatch('fetchServiceAreas');
        await context.dispatch('fetchImages');
        await context.dispatch('fetchGlobal');
    }
}