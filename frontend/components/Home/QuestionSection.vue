<template>
   <div class="text-base mx-5 md:mx-0">
     <h2 class="text-3xl font-bold pb-10 md:pb-20"> Frequently Asked Questions </h2>

     <div class="max-w-screen-md mx-auto">

       <accordian
           v-for="n in 5"
           title="This is a question"
           content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius eum illum ipsam, possimus praesentium quibusdam tempore? Adipisci aliquid, architecto at explicabo harum iure minima molestias, nam quaerat sapiente, temporibus?"/>
     </div>
   </div>
</template>

<script>
import Accordian from "@/components/Accordian";

export default {
  name: "QuestionSection",
  components: {
    Accordian
  }
}
</script>

<style scoped>

</style>