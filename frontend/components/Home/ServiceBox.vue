<template>
  <div class="flex flex-col bg-white border border-gray-200 cursor-pointer filter hover:brightness-90 duration-200">
    <div>
      <img :src="imageUrl" alt="service-image" class="h-60 w-full object-cover">
    </div>
    <div class="p-5 flex justify-between gap-2 items-center my-auto">
      <div class="flex-1">
        <h3 class="font-bold">{{ title }}</h3>
        <p>{{ shortDesc }}</p>
      </div>

      <font-awesome-icon :icon="faChevronRight"/>

    </div>
  </div>
</template>

<script>

import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default {
  name: "ServiceBox",
  props: {
    imageUrl: String,
    title: String,
    shortDesc: String
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    }
  }
}
</script>

<style scoped>

</style>