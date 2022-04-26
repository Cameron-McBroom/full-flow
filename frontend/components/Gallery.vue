<template>
  <div>
    <div v-if="!imagesToShow.length">
      <p class="text-lg">Sorry, our website is new and we are still adding images for all our services. Click below to see our full gallery</p>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-3">

      <div v-for="(image, imgIndex) in imagesToShow" class="h-40 md:h-60 lg:h-80" @click="index = imgIndex">
        <img :src="image.smallUrl" :alt="image.alt"
             class="rounded overflow-hidden  h-full w-full object-cover filter hover:brightness-75 duration-200 cursor-pointer"/>
      </div>

      <cool-light-box :items="imagesToShow.map(i => i.largeUrl)" :index="index" @close="index=null"/>

    </div>
  </div>

</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: 'Gallery',
  components: {
    CoolLightBox
  },
  props: {
    serviceIds: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      images: [],
      index: null
    }
  },
  computed: {
    imagesToShow() {
      let filteredImages = [...this.images];

      if (this.serviceIds.length) {
        // Here we filter the images for any of the services passed. If no service ids have been passed we ignore this step
        filteredImages = filteredImages.filter(i => i.serviceIds.some(id => this.serviceIds.includes(id)))
      }

      if (filteredImages.length > 9) {
        return filteredImages.slice(0, 9);
      }

      return filteredImages;
    }
  },
  methods: {
    async fetchImages() {
      const res = await this.$axios.$get("/images?populate=%2A")

      this.images = res.data.map(item => {
        const smallImage = item.attributes.image.data.attributes.formats.small

        return {
          alt: item.attributes.description,
          url: this.$parseUrl(item.attributes.image.data.attributes.url),
          largeUrl: this.$parseUrl(item.attributes.image.data.attributes.formats.medium.url),
          mediumUrl: this.$parseUrl(item.attributes.image.data.attributes.formats.medium.url),
          smallUrl: this.$parseUrl(smallImage.url),
          serviceIds: item.attributes.services.data.map(s => s.id)
        }
      });
    },
  },
  async fetch() {
    await this.fetchImages()
  }
}
</script>
