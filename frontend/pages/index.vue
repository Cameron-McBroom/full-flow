<template>
  <div>
    <hero @main-action="scrollToQuoteForm"/>

    <!-- Main Content of Page   -->
    <div class="max-w-screen-lg mx-auto text-center py-24 md:py-32">
      <gallery-section/>
      <review-section class="pt-24 md:pt-32"/>
      <service-section class="pt-24 md:pt-32"/>
      <matt-section class="pt-24 md:pt-32"/>
      <question-section class="pt-24 md:pt-32"/>
      <quote-section id="quoteSection" class="pt-24 md:pt-32"/>
    </div>

  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
import GallerySection from "@/components/Home/GallerySection";
import ReviewSection from "@/components/Home/ReviewSection";
import ServiceSection from "@/components/Home/ServiceSection";
import MattSection from "@/components/Home/MattSection";
import QuestionSection from "@/components/Home/QuestionSection";
import QuoteSection from "@/components/Home/QuoteSection";

export default {
  name: 'IndexPage',
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
  components: {
    QuoteSection,
    QuestionSection,
    MattSection,
    ServiceSection,
    ReviewSection,
    Hero,
    GallerySection
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
    async fetchSeoMeta() {
      const seoRes = await this.$axios.$get('homepage?populate[seo][populate][0]=shareImage');
      const seoData = seoRes.data.attributes.seo;

      this.seo.title = seoData.metaTitle;
      this.seo.description = seoData.metaDescription;
      this.seo.shareImageUrl = seoData.shareImage.data.attributes.url;
    },
    scrollToQuoteForm() {
      document.querySelector('#quoteSection').scrollIntoView({behavior: 'smooth'})
    }
  },
  async fetch() {
    await this.fetchSeoMeta();
  }
}
</script>

<style scoped>


</style>
