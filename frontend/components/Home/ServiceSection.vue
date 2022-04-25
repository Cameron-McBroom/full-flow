<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl pb-10 md:pb-20"> Learn more about our services </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">

      <nuxt-link v-for="service in services" :to="`/service/${slugForTitle(service.title)}`" :key="service.title">
        <service-box
            class="h-full"
            :title="service.title"
            :short-desc="service.shortDesc"
            :image-url="service.imageUrl"/>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
import ServiceBox from "@/components/Home/ServiceBox";

export default {
  name: "ServiceSection",
  components: { ServiceBox },

  data() {
    return {
      services: []
    }
  },
  methods: {
    convertUrl(url) {
      if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
        return url
      }
      return "http://localhost:1337" + url
    },

    async fetchServices() {
      const {data} = await this.$axios.$get("/services?populate=coverImage");

      this.services = data.map(item => {
        return {
          title: item.attributes.name,
          shortDesc: item.attributes.descriptionShort,
          imageUrl: this.convertUrl(item.attributes.coverImage.data.attributes.formats.small.url)
        }
      });
    },
    slugForTitle(title) {
      return title.replace(" ", "-").toLowerCase()
    }
  },
  async fetch() {
    await this.fetchServices()
  }
}
</script>

<style scoped>

</style>