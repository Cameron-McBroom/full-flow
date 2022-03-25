<!-- Please remove this file from your project -->
<template>
  <div class="max-w-screen-lg mx-auto h-full pb-20 px-3 pt-14">

    {{ articles }}

  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      articles: []
    }
  },
  methods: {
    // scrollToQuoteForm() {
    //   document.querySelector('#quoteForm').scrollIntoView({behavior: 'smooth'})
    // }
  },
  async fetch() {
    this.articles = await this.$axios.$get("/articles")
  }
}
</script>
