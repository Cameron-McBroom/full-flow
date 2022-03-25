<template>
  <home></home>
</template>

<script>
import home from "@/components/Home";

export default {
  name: 'IndexPage',
  head: {
    title: 'Return Evolved | High performing Websites for Local Businesses | Sydney',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Professionally designed and developed websites for local businesses that effectively sells your value'
      }
    ]
  },
  components: {
    home
  }
}
</script>
