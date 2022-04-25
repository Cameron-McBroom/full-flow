<template>
  <div class="bg-white p-4 border rounded-lg border-gray-200 text-left">
<!--    <font-awesome-icon :icon="faQuoteLeft" class="text-2xl"/>-->
    <div class="flex gap-2 items-center">
      <img :src="imageUrl" alt="reviewer image" width="30" height="30"/>
      <p class="font-semibold"> {{ name }} </p>
    </div>
    <p class="font-semibold py-2"> {{ title }} </p>
    <p> {{ content }} </p>
  </div>
</template>

<script>
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default {
  name: "Review",
  props: {
    image: String,
    name: String,
    title: String,
    content: String,
  },
  computed: {
    faQuoteLeft: () => faQuoteLeft,
    imageUrl() {
      if (this.image.indexOf('http://') === 0 || this.image.indexOf('https://') === 0) {
        return this.image
      }
      return "http://localhost:1337" + this.image
    }
  },
}
</script>

<style scoped>

</style>