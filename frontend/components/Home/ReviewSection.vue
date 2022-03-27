<template>
  <div class="mx-5 md:mx-0">
    <h2 class="font-bold text-3xl pb-10 md:pb-20" > What our customers have to say </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
      <review
          name="John Smith"
          content="Thanks Matt you did an awesome job painting our home. Will definetly be recommending you to other friends and family"
          title="3 Bedroom Home, Kellyville"/>

      <review
          name="John Smith"
          content="Thanks Matt you did an awesome job painting our home."
          title="3 Bedroom Home, Kellyville"/>

      <review
          name="John Smith"
          content="Thanks Matt you did an awesome job painting our home. Will definetly be recommending you to other friends and family"
          title="3 Bedroom Home, Kellyville"/>
    </div>
  </div>
</template>

<script>
import review from "@/components/Review";

export default {
  name: "ReviewSection"
}
</script>

<style scoped>

</style>