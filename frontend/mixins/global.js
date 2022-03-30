export default {
    head() {
        return {
            title: this.seo.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.seo.description
                }
            ]
        }
    },
    data() {
        return {
            seo: {
                title: '',
                description: '',
                shareImageUrl: '',
            }
        }
    },
    methods: {
        /** Fetches and updates the head tag from the CMS */
        async fetchSeoMeta(page) {
            const seoRes = await this.$axios.$get(`${page}?populate[seo][populate][0]=shareImage`);
            const seoData = seoRes.data.attributes.seo;

            this.seo.title = seoData.metaTitle;
            this.seo.description = seoData.metaDescription;
            this.seo.shareImageUrl = seoData.shareImage?.data?.attributes?.url || '';
        },
    }
}