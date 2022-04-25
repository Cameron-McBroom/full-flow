<template>
  <div id="quoteSection" class="px-5 md:px-0 max-w-screen-md mx-auto">
    <h2 class="text-3xl font-bold"> Get your free, no obligation quote </h2>
    <p class="text-lg pb-10 md:pb-20">Once you fill in the form we will contact you to discuss more about how we can help you, when you need the job complete and give you a price estimate.</p>


    <request-form class="flex-1"/>
    
  </div>
</template>

<script>
import RequestForm from "@/components/RequestForm";
export default {
  name: "QuoteSection",
  components: {
    RequestForm
  }
}
</script>

<style scoped>

</style>