<template>
  <div class="bg-white p-4 border border-gray-200 text-left">
    <p class="font-semibold"> {{ name }} </p>
    <p class="font-semibold py-2"> {{ title }} </p>
    <p> {{ content }} </p>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: {
    image: String,
    name: String,
    title: String,
    content: String,
  }
}
</script>

<style scoped>

</style>