<template>
  <div>

    <div class="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-3">

      <div v-for="(image) in imagesToShow" class="max-h-80 ">
        <img :src="image.smallUrl" :alt="image.alt" class="h-full w-full object-cover filter hover:brightness-75 duration-200 cursor-pointer">
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: []
    }
  },
  computed: {
    imagesToShow() {
      if (this.images.length > 9) {
        return this.images.slice(0, 9);
      }
      return this.images
    }
  },
  methods: {
    async fetchImages() {
      const res = await this.$axios.$get("/images?populate=image")

      this.images = res.data.map(item => {
        const smallImage = item.attributes.image.data.attributes.formats.small

        return {
          alt: item.attributes.description,
          url: item.attributes.image.data.attributes.url,
          mediumUrl: item.attributes.image.data.attributes.formats.medium.url,
          smallUrl: smallImage.url,
        }
      });
    },
  },
  async fetch() {
    await this.fetchImages()
  }
}
</script>
