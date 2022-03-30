<template>
  <div class="max-w-screen-lg mx-auto text-center py-24 md:py-32">
    <div class="mb-24 md:mb-32 px-2">
      <h1 class="text-4xl">The Uplift Gallery</h1>
      <p class="text-xl mt-2"> See our work quality and get some ideas for your next project</p>
    </div>

    <div class="hidden md:grid grid-cols-3 gap-5 items-start mb-24 md:mb-32">
      <div v-for="n in 3" class="grid gap-5">
        <img v-for="(id) in trippleColumnIds[n-1]"
             :src="imageWithId(id).medium.url"
             :alt="imageWithId(id).alt"
             :key="id"
             @click="index=indexOfImage(id)"
             class="filter hover:brightness-75 duration-200 cursor-pointer">
      </div>

    </div>

    <div class="grid md:hidden grid-cols-2 gap-5 items-start mb-24 md:mb-32">

      <div v-for="n in 2" class="grid gap-5">
        <img v-for="(id) in doubleColumnIds[n-1]"
             :src="imageWithId(id).medium.url"
             :alt="imageWithId(id).alt"
             :key="id"
             @click="index=indexOfImage(id)"
             class="filter hover:brightness-75 duration-200 cursor-pointer">
      </div>
    </div>

    <quote-section/>

    <cool-light-box :items="orderedImages.map(i => i.url)" :index="index" @close="index=null"/>

  </div>
</template>

<script>
import QuoteSection from "@/components/Home/QuoteSection";
import global from "@/mixins/global";

import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  components: {QuoteSection, CoolLightBox},
  mixins: [global],
  data() {
    return {
      index: null
    }
  },
  computed: {
    // Returns a 1D array of the photos ids
    orderedImageIds() {
      if (this.$mq === 'sm') {
        return this.doubleColumnIds.flat()
      }
      return this.trippleColumnIds.flat()
    },

    orderedImages() {
      return this.orderedImageIds.map(id => this.$store.state.images[id]);
    },
    trippleColumnIds() {
      // Shuffle randomly 20 times to find the closest height
      let best = [[]];
      let bestRange = Infinity;
      let shuffledIds = [...Object.keys(this.$store.state.images)];

      for (let i = 0; i < 30; i++) {
        const dividedInto3 = this.divideInto3(shuffledIds)
        const colHeights = this.heightOf3(dividedInto3);
        const range = this.calculateRange(colHeights)

        if (range < bestRange) {
          best = dividedInto3;
          bestRange = range;
        }
        shuffledIds = this.shuffleImages(shuffledIds);
      }
      return best;
    },
    doubleColumnIds() {
      // Shuffle randomly 20 times to find the closest height
      let best = [[]];
      let bestRange = Infinity;
      let shuffledIds = [...Object.keys(this.$store.state.images)];

      for (let i = 0; i < 30; i++) {
        const dividedInto2 = this.divideInto2(shuffledIds)
        const colHeights = this.heightOf2(dividedInto2);
        const range = this.calculateRange(colHeights)

        if (range < bestRange) {
          best = dividedInto2;
          bestRange = range;
        }
        shuffledIds = this.shuffleImages(shuffledIds);
      }
      return best;
    },
  },
  methods: {
    indexOfImage(id) {
      return this.orderedImageIds.indexOf(id);
    },

    imageWithId(id) {
      return this.$store.state.images[id];
    },

    shuffleImages(imgIdArray) {
      return imgIdArray.sort(() => (Math.random() > .5) ? 1 : -1);
    },
    calculateRange(colHeights) {
      const smallest = Math.min(...colHeights);
      const largest = Math.max(...colHeights);
      return largest - smallest;
    },

    // Three columns
    divideInto3(imageIds) {
      let col1 = []
      let col2 = []
      let col3 = []

      // Split into three even groups
      imageIds.forEach((imgId, idx) => {
        if (idx % 3 === 0) col1.push(imgId);
        if (idx % 3 === 1) col2.push(imgId);
        if (idx % 3 === 2) col3.push(imgId);
      })

      return [col1, col2, col3]
    },
    heightOf3(imgColsId) {
      // Sum height in col
      const heightOfCol = (col) => col.reduce((accumulator, imageId) => accumulator + this.$store.state.images[imageId].medium.height, 0)
      return [heightOfCol(imgColsId[0]), heightOfCol(imgColsId[1]), heightOfCol(imgColsId[2])]
    },

    // Two columns
    divideInto2(imageIds) {
      const ids = [...imageIds]

      const middleIndex = Math.ceil(ids.length / 2);

      const firstHalf = ids.splice(0, middleIndex);
      const secondHalf = ids.splice(-middleIndex);

      return [firstHalf, secondHalf]
    },
    heightOf2(imgColsId) {
      // Sum height in col
      const heightOfCol = (col) => col.reduce((accumulator, imageId) => accumulator + this.$store.state.images[imageId].medium.height, 0)
      return [heightOfCol(imgColsId[0]), heightOfCol(imgColsId[1])]
    },

  },

  async fetch() {
    await this.fetchSeoMeta('gallery');
  }
}
</script>

<style scoped>

</style>