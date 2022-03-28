<template>
  <form class="p-4 grid gap-5 bg-white border border-gray-200">
    <div>
      <label for="name" class="block">Name</label>
      <input name="name" id="name" type="text" v-model="form.name" class="w-full bg-gray-100 h-12 border border-gray-200 p-2 rounded-none"/>
    </div>

    <div>
      <label for="email" class="block">Email</label>
      <input name="email" id="email" type="email" v-model="form.email"  class="w-full bg-gray-100 h-12 border border-gray-200 p-2 rounded-none"/>
    </div>

    <div>
      <label for="phone" class="block">Phone</label>
      <input name="phone" id="phone" type="tel" v-model="form.phone" class="w-full bg-gray-100 h-12 border border-gray-200 p-2 rounded-none"/>
    </div>

    <div>
      <label for="description" class="block">Description</label>
      <textarea name="description" id="description" v-model="form.description" class="w-full bg-gray-100 h-24 border border-gray-200 p-2 rounded-none"/>
    </div>

    <button class="btn-primary-red">
      Get free quote
    </button>
  </form>
</template>

<script>
export default {
  name: "RequestForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>

</style>