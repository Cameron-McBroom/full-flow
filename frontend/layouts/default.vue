<template>
  <div class="bg-gray-100 text-cblue">
    <header>
      <nav-bar></nav-bar>
    </header>
    <nuxt/>
    <footer class="bg-cblue text-white">
      <div class="max-w-screen-lg flex justify-between text-left mx-auto px-3 py-10 md:flex-row flex-wrap gap-5">
        <div class="max-w-xl">
          <h3 class="font-bold">Uplift Painting and Decorating</h3>
          <p>Licence No. 345470</p>
          <p>Kellyville Ridge NSW 2155</p>
          <p class="underline"><a href="tel:+61412857681">0412 857 681</a></p>
          <p class="underline"><a href="mailto:upliftpaintinganddecorating@gmail.com">upliftpaintinganddecorating@gmail.com</a></p>
          <p>100% Satisfaction Guarantee</p>
        </div>

        <div class="max-w-xl">
          <h3 class="font-bold">Services</h3>
          <p><a href="#">Interior Painting</a></p>
          <p><a href="#">Exterior Painting</a></p>
          <p><a href="#">Painting and Decorating</a></p>
          <p><a href="#">Timber Staining</a></p>
          <p><a href="#">Epoxy Flooring</a></p>
          <p><a href="#">Commerical Painting</a></p>
        </div>

        <div class="max-w-xl">
          <h3 class="font-bold">Service Areas</h3>
          <p><a href="#">Western Sydney</a></p>
          <p><a href="#">Hills District</a></p>
          <p><a href="#">Greater Sydney</a></p>
          <p><a href="#">Inner West</a></p>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style>
html {
  font-family: 'Nunito Sans', 'sans-serif';
  background-color: theme('colors.gray.100');
}

h1,h2,h3,h4,h5 {
  font-family: 'Source Serif Pro', 'serif';
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

</style>
