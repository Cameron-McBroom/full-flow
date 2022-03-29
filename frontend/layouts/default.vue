<template>
  <div class="bg-gray-100 text-cblue">
    <header class="pb-16">
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
html {
  font-family: 'Nunito Sans', 'sans-serif';
  background-color: theme('colors.gray.100');
}

h1, h2, h3, h4, h5 {
  font-family: 'Source Serif Pro', 'serif';
}

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-3xl font-bold;
}

h3 {
  @apply text-2xl font-bold;
}

h4 {
  @apply text-lg font-bold;
}

h5 {
  @apply text-lg font-bold;
}

.text-gradient {
  @apply text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-red-600;
}

.btn-primary-blue {
  @apply bg-cblue bg-opacity-90 border-cblue border-2 border-opacity-90 text-white px-4 py-2 hover:border-opacity-100 hover:bg-opacity-100 transition-all duration-200;
}

.btn-primary-blue-outline {
  @apply text-cblue px-4 py-2 border-cblue border-2 hover:bg-cblue hover:text-white transition-all duration-200;
}

.btn-primary-red {
  @apply bg-cred border-cred border-2 text-white px-4 py-2 hover:border-opacity-80 hover:bg-opacity-80 transition-all duration-200;
}

.btn-primary-red-outline {
  @apply text-cred px-4 py-2 border-cred border-2 hover:bg-cred hover:text-white transition-all duration-200;
}

.btn-menu {
  @apply border-transparent border-b-2 hover:border-cred hover:border-b-2 px-4 py-2 transition-all duration-200;
}

.btn-menu-no-underline {
  @apply px-4 py-2;
}


</style>
