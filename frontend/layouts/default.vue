<template>
  <div id="main-layout" class="bg-transparent text-ff-text overflow-x-hidden h-screen flex flex-col">
    <header>
      <nav-bar></nav-bar>
    </header>
    <div class="flex-1">
      <nuxt id="nuxt-container"/>
    </div>
    <footer class="bg-cblue text-white">
      <footer-bar/>

    </footer>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";

export default {
  name: "default",
  components: {FooterBar}
}
</script>

<style>



</style>
