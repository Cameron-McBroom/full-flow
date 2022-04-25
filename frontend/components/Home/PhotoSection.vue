<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl"> See some of the transformations for yourself </h2>

    <div class="grid md:grid-cols-2 text-left gap-5 py-10 md:py-20">
      <div v-for="image in images">
        <p class="text-lg font-bold pb-2">{{image.title}}</p>
        <img :src="image.image" :alt="image.title" class="rounded">
      </div>
    </div>

    <nuxt-link to="/gallery">
      <button class="btn-primary-blue-outline"> See our gallery</button>
    </nuxt-link>
    <a href="https://instagram.com/fullflowpc" class="underline block mt-5" target="_blank">or check us out on instagram</a>
  </div>
</template>

<script>
export default {
  name: "PhotoSection",
  data() {
    return {
      images: []
    }
  },
  methods: {
    convertUrl(url) {
      if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
        return url
      }
      return "http://localhost:1337" + url
    }
  },
  async fetch() {
    const {data: res} = await this.$axios.get('/home-page-images?populate=image');

    this.images = res.data.map(i => {
      return {
        title: i.attributes.title,
        image: this.convertUrl(i.attributes.image.data.attributes.url)
      }
    })
  }
}
</script>

<style scoped>

</style>