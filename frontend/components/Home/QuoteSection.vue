<template>
  <div>
    <h2 class="text-3xl font-bold pb-10 md:pb-20"> Get in touch for a free quote </h2>
    
    <div class="flex flex-col md:flex-row text-left">
      <div class="px-5 pb-5 flex flex-col items-start gap-2">
        <img
            src="https://res.cloudinary.com/cmcbroom/image/upload/v1648263608/uplift_painting_decorating_logo_design_1_f77c4f2ce0.webp?updated_at=2022-03-26T03:08:29.530Z"
            alt="logo"
          class="w-40">
        <h3 class="font-bold text-xl">Mathew Vella</h3>
        <p>Licence No. 345470</p>
        <p>Kellyville Ridge NSW 2155</p>
        <p class="underline"><a href="tel:+61412857681">0412 857 681</a></p>
        <p class="underline"><a href="mailto:upliftpaintinganddecorating@gmail.com">upliftpaintinganddecorating@gmail.com</a></p>
        <p>100% Satisfaction Guarantee</p>
      </div>

      <request-form class="flex-1 mx-5 md:mx-0"/>
      
      
    </div>
    
    
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