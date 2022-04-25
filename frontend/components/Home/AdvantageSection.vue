<template>
  <div class="mx-5 md:mx-0">
    <div>
      <h2 class="font-bold text-3xl"> We don't just spray water </h2>
      <p class="text-lg"> Heres some of the reasons customers choose us </p>
    </div>


    <div class="grid grid-cols-2 lg:grid-cols-4 pt-10 md:pt-20 gap-5">

      <div v-for="advantage in advantages">
        <img :src="advantage.icon" alt="Advantage Icon" class="mx-auto"/>
        <h4> {{ advantage.title }} </h4>
        <p> {{ advantage.description }} </p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "AdvantageSection",
  data() {
    return {
      advantages: {}
    }
  },

  methods: {
    async fetchAdvantages() {
      const {data} = await this.$axios.$get("/value-props?populate=icon");

      this.advantages = data.map(item => {
        return {
          title: item.attributes.title,
          description: item.attributes.description,
          icon: this.$parseUrl(item.attributes.icon.data.attributes.url)
        }
      });
    },
  },

  async fetch() {
    await this.fetchAdvantages()
  }
}
</script>

<style scoped>

</style>