<template>
  <div class="mx-5 md:mx-0">
    <img src="~assets/stars.svg" alt="stars" class="mx-auto w-48">
    <h2 class="font-bold text-3xl pb-10 md:pb-20" > Rated 5/5 on Google </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">


      <review v-for="review in reviews"
          :name="review.name"
          :content="review.content"
          :title="review.title"
          :image="review.image"
          :key="review.content"/>

    </div>

    <div class="mt-10 underline">
      <a href="https://g.page/r/CbaqrewqrxxPEBA" target="_blank">Click here to see all reviews on google</a>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review";

export default {
  name: "ReviewSection",
  components: {
    Review
  },
  data() {
    return {
      reviews: []
    }
  },
  async fetch() {
    const {data: res} = await this.$axios.get('/reviews?populate=userImage');

    this.reviews = res.data.map(i => {
      return {
        name: i.attributes.personName,
        content: i.attributes.content,
        title: i.attributes.title,
        image: i.attributes.userImage.data.attributes.url
      }
    })
  }
}
</script>

<style scoped>

</style>