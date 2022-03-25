<template>
  <div class="font-mono bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <header>
      <nav-bar></nav-bar>
    </header>
    <nuxt/>
    <footer class="bg-black bg-opacity-5">
      <div class="max-w-screen-lg flex justify-between text-left mx-auto px-3 py-10 md:flex-row flex-wrap gap-5">
        <div class="max-w-xl">
          <h3 class="font-bold">About us</h3>
          <p> Return Evolved was born from a background in digital analytics, consumer psychology and software
            engineering. Combining these skills to create exceptional digital experiences for local businesses like
            yours.</p>
        </div>

        <div>
          <h3 class="font-bold">Contact us</h3>
          <p>+61 401 817 894</p>
          <p>cam.mcbroom@gmail.com</p>
          <p>Sydney, NSW Australia</p>
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
  font-family: 'Fira Code', 'Georgia', 'sans-serif';
  background-color: theme('colors.gray.100');
}

h1,h2,h3,h4,h5 {
  font-family: 'Montserrat', 'sans-serif';
}

.text-gradient {
  @apply text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-red-600;
}

</style>
