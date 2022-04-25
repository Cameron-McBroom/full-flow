<template>
  <div>
    <p class="text-lg">Call or text for a free quote</p>
    <h2 class="bg-white py-4 px-6 inline-block mx-auto rounded-lg"> {{ $store.state.global.contactNumber }}</h2>
  </div>
</template>

<script>
export default {
  name: "CallSection"
}
</script>

<style scoped>

</style>