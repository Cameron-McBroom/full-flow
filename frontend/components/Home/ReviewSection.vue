<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl pb-10 md:pb-20" > What our customers have to say </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">


      <review v-for="review in reviews"
          :name="review.name"
          :content="review.content"
          :title="review.title"
          :key="review.content"/>

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
    const {data: res} = await this.$axios.get('/reviews');

    this.reviews = res.data.map(i => {
      return {
        name: i.attributes.personName,
        content: i.attributes.content,
        title: i.attributes.title
      }
    })
  }
}
</script>

<style scoped>

</style>