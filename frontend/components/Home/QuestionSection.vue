<template>
   <div class="text-base mx-5 md:mx-0">
     <h2 class="text-3xl font-bold pb-10 md:pb-20"> Frequently Asked Questions </h2>

     <div class="max-w-screen-md mx-auto">

       <accordian
           v-for="question in faqs"
           :title="question.question"
           :content="question.answer"
           :key="question.question"/>
     </div>
   </div>
</template>

<script>
import Accordian from "@/components/Accordian";

export default {
  name: "QuestionSection",
  components: {
    Accordian
  },
  data() {
    return {
      faqs: []
    }
  },
  async fetch() {
    const res = await this.$axios.$get('/faqs')

    this.faqs = res.data.map(i => {
      return {
        question: i.attributes.question,
        answer: i.attributes.answer
      }
    })
  }
}
</script>

<style scoped>

</style>