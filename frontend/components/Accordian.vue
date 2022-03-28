<template>
  <div class="text-left border-b border-gray-300 last:border-b-0">
    <button class="flex justify-between bg-gray-200 p-4 items-center w-full hover:bg-gray-300 transition-all duration-200" @click="open = !open">
      <span class="text-left">{{ title }}</span>
    <font-awesome-icon :icon="faChevronRight" class="transition-all duration-200 ease-in-out" :class="!open ? 'fa-rotate-90' : 'fa-rotate-270'"/>
    </button>

    <div class="transition-all overflow-hidden duration-200 ease-in-out" :class="!open ? 'max-h-0' : 'max-h-screen'">
      <p class="p-4"> {{ content }} </p>
    </div>
  </div>
</template>

<script>
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default {
  name: "Accordian",
  props: {
    title: String,
    content: String,
    defaultOpen: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    faChevronRight() {
      return faChevronRight
    }
  },
  created() {
    this.open = this.defaultOpen
  }
}
</script>

<style scoped>

</style>