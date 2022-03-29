
export const state = () => ({
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

    }
}

export const actions = {
    async fetchImages({ commit }) {
        const res = await this.$axios.$get("/images?populate=image")

        const images = res.data.map(item => {
            const mediumImage = item.attributes.image.data.attributes.formats.medium
            const smallImage = item.attributes.image.data.attributes.formats.small

            return {
                id: item.id,
                alt: item.attributes.description,
                url: item.attributes.image.data.attributes.url,
                medium: {
                    url: mediumImage.url,
                    width: mediumImage.width,
                    height: mediumImage.height
                },
                small: {
                    url: smallImage.url,
                    width: smallImage.width,
                    height: smallImage.height
                },
            }
        });

        commit('setImages', images)
    },

    async fetchServices({commit}) {
        // Fetch services
        const res = await this.$axios.$get('/services');
        const services = res.data.map(i => {
            return {
                path: i.attributes.name.replace(' ', '-').toLowerCase(),
                name: i.attributes.name
            }
        })
        commit('setServices', services);
    },

    async fetchServiceAreas({commit}) {
        const res = await this.$axios.$get('/service-areas');
        const areas = res.data.map(i => {
            return {
                path: i.attributes.area.replace(' ', '-').toLowerCase(),
                name: i.attributes.area,
                description: i.attributes.description
            }
        })
        commit('setServiceAreas', areas);
    },

    async nuxtServerInit (context, { req }) {
        await context.dispatch('fetchServices');
        await context.dispatch('fetchServiceAreas');
        await context.dispatch('fetchImages');
    }
}