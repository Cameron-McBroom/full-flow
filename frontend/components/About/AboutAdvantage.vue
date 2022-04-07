<template>
  <div class="flex flex-col gap-5 items-center" :class="flip ? 'md:flex-row-reverse' : 'md:flex-row'">

    <div class="flex-1 text-left">
      <h2>{{title}}</h2>
      <div class="text-base markdown" v-html="markdownHTML"></div>
    </div>

    <div class="flex-1">
      <img :src="img.url" :alt="img.alt">
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutAdvantage",
  props: {
    title: String,
    markdown: String,
    img: Object,
    flip: Boolean
  },
  computed: {
    markdownHTML() {
      return this.$md.render(this.markdown || "");
    }
  }
}
</script>

<style scoped>

</style>