<template>
  <div class="bg-gray-100 text-cblue">
    <header>
      <nav-bar></nav-bar>
    </header>
    <nuxt/>
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
