<template>
  <div class="flex flex-col gap-5 items-center" :class="flip ? 'md:flex-row-reverse' : 'md:flex-row'">

    <div class="flex-1 text-left">
      <h2>{{title}}</h2>
      <vue-markdown> {{markdown}} </vue-markdown>
    </div>

    <div  class="flex-1">
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
  }
}
</script>

<style scoped>

</style>