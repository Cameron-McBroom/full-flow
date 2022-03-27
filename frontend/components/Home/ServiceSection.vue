<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl pb-10 md:pb-20"> Whatever the job, we have you covered </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">

      <service-box
          v-for="service in services"
          :title="service.title"
          :short-desc="service.shortDesc"
          image-url="https://res.cloudinary.com/cmcbroom/image/upload/v1648335126/ralph_ravi_kayden_2d4l_AQ_Alb_DA_unsplash_461a04d31c.jpg?updated_at=2022-03-26T22:52:10.743Z"/>

      <service-box
          v-for="service in services"
          :title="service.title"
          :short-desc="service.shortDesc"
          image-url="https://res.cloudinary.com/cmcbroom/image/upload/v1648335125/minh_pham_7p_CF_Uyb_P_P8_unsplash_26c5848375.jpg?updated_at=2022-03-26T22:52:10.153Z"/>
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
      const res = await this.$axios.$get("/services?populate=coverImage");

      this.services = res.data.map(item => {
        return {
          title: item.attributes.name,
          shortDesc: item.attributes.descriptionShort
        }
      })
    }
  },
  async fetch() {
    await this.fetchServices()
  }
}
</script>

<style scoped>

</style>