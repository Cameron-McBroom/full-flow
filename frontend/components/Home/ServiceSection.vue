<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl pb-10 md:pb-20"> Learn more about our services </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">

      <nuxt-link v-for="service in filteredServices" :to="`/service/${slugForTitle(service.name)}`" :key="service.name">
        <service-box
            class="h-full"
            :title="service.shortName"
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
  computed: {
    filteredServices() {
      return this.$store.state.services.filter(i => {
        const slug = `/service/${this.slugForTitle(i.name)}`
        return this.$route.path !== slug;
      })
    }
  },
  methods: {
    slugForTitle(title) {
      return title.replace(/ /g, "-").toLowerCase()
    }
  }
}
</script>

<style scoped>

</style>