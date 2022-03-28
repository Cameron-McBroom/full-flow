<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl pb-10 md:pb-20"> Whatever the job, we have you covered </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">

      <service-box
          v-for="service in services"
          :title="service.title"
          :short-desc="service.shortDesc"
          :image-url="service.imageUrl"
          :key="service.title"/>

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
    async fetchServices() {
      const {data} = await this.$axios.$get("/services?populate=coverImage");

      this.services = data.map(item => {
        return {
          title: item.attributes.name,
          shortDesc: item.attributes.descriptionShort,
          imageUrl: item.attributes.coverImage.data.attributes.formats.small.url
        }
      });
    }
  },
  async fetch() {
    await this.fetchServices()
  }
}
</script>

<style scoped>

</style>