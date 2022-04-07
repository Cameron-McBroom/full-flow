<template>
  <div class="max-w-screen-lg mx-auto text-center py-24 md:py-32">
    <h1 class="font-sans text-sm mb-3 font-normal">About Uplift Painting and Decorating</h1>
    <matt-section class="mb-24 md:mb-32"/>

    <div class="mb-24 md:mb-32 px-5 md:px-0" v-if="advantages.length">
      <h2 class="mb-10 md:mb-20">What makes Uplift different?</h2>

      <about-advantage
          v-for="(advantage, index) in advantages"
          :key="advantage.id"
          class="mb-10 md:mb-20"
          :title="advantage.title"
          :img="advantage.img"
          :markdown="advantage.description"
          :flip="index % 2 === 0"/>

    </div>

    <quote-section/>

  </div>
</template>

<script>
import MattSection from "@/components/Home/MattSection";
import AboutAdvantage from "@/components/About/AboutAdvantage";
import QuoteSection from "@/components/Home/QuoteSection";

import global from "@/mixins/global";

export default {
  name: "about",
  mixins: [global],
  components: {QuoteSection, AboutAdvantage, MattSection},
  data() {
    return {
      advantages: []
    }
  },
  methods: {
    async fetchAdvantages() {
      try {
        const res = await this.$axios.$get('/about-advantages?populate=supportingImage');

        this.advantages = res.data.map(item => {
          return {
            id: item.id,
            title: item.attributes.title,
            description: item.attributes.description,
            img: {
              url: item.attributes.supportingImage.data.attributes.url,
              alt: item.attributes.supportingImage.data.attributes.alt,
            }
          }
        })
      }
      catch (e) {
        console.log(e);
        this.advantages = []
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