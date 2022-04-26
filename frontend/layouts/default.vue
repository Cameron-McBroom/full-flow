<template>
  <div id="main-layout" class="bg-transparent text-ff-text overflow-x-hidden">
    <header>
      <nav-bar></nav-bar>
    </header>
    <nuxt id="nuxt-container"/>
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
