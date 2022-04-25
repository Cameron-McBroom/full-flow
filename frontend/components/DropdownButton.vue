<template>
  <div class="dropdown relative inline-block">
    <button class="btn-menu-no-underline">
      {{ btnText }}
      <font-awesome-icon :icon="faCaretDown"/>
    </button>
    <div class="content hidden text-ff-text absolute rounded bg-gray-100 shadow-lg z-10 flex-col transition-all duration-200 border-gray-200 border">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


export default {
  name: "DropdownButton",
  props: {
    btnText: String
  },
  computed: {
    faCaretDown() {return faCaretDown}
  }
}
</script>

<style scoped>

.content { min-width: 150px; }

.dropdown:hover .content {
  display:flex
}

</style>