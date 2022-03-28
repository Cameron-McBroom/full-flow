<template>
  <div class="bg-white p-4 border border-gray-200 text-left">
    <font-awesome-icon :icon="faQuoteLeft" class="text-2xl"/>
    <p class="font-semibold"> {{ name }} </p>
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
    faQuoteLeft: () => faQuoteLeft
  }
}
</script>

<style scoped>

</style>