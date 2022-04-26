<template>
  <div class="max-w-screen-lg mx-auto py-24 md:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h1 class="mb-3">About Full Flow Pressure Cleaning</h1>
        <div class="text-base markdown text-left" v-html="about.content"></div>
      </div>
      <img v-if="about.teamImage" :src="about.teamImage.url" :alt="about.teamImage.alt" class="rounded-lg overflow-hidden">
    </div>

    <div class="text-center">
      <review-section class="mt-10 md:mt-20"/>
      <service-section class="mt-10 md:mt-20"/>
      <quote-section class="mt-10 md:mt-20"/>
    </div>
  </div>
</template>

<script>
import MattSection from "@/components/Home/MattSection";
import AboutAdvantage from "@/components/About/AboutAdvantage";
import QuoteSection from "@/components/Home/QuoteSection";

import global from "@/mixins/global";
import ReviewSection from "@/components/Home/ReviewSection";
import ServiceSection from "@/components/Home/ServiceSection";

export default {
  name: "about",
  mixins: [global],
  components: {ServiceSection, ReviewSection, QuoteSection, AboutAdvantage, MattSection},
  data() {
    return {
      about: {}
    }
  },
  methods: {
    async fetchAdvantages() {
      try {
        const res = await this.$axios.$get('/about?populate=teamImage');

        const item = res.data.attributes

        this.about = {
            content: this.$md.render(item.content || ""),
            teamImage: {
              url: this.$parseUrl(item.teamImage.data.attributes.url),
              alt: item.teamImage.data.attributes.alt,
            }
          }

      }
      catch (e) {
        console.log(e);
        this.about = {}
      }
    }
  },
  async fetch() {
    await this.fetchAdvantages()
    await this.fetchSeoMeta('about');
  }
}
</script>

<style scoped>

</style>