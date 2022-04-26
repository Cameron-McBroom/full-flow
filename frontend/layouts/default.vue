<template>
  <div id="main-layout" class="bg-gray-100 text-ff-text">
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
