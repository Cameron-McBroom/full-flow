<template>
  <div class="h-full">
    <div class="hero-image h-full">
      <div class="max-w-screen-lg mx-auto h-full text-white md:text-cblue">
        <div class="md:bg-white p-5 max-w-sm absolute top-1/4  -translate-y-1/2">
          <h1 class="text-4xl font-bold"> {{ headline }} </h1>
          <p class="text-xl my-6"> {{ subheadline }} </p>
          <button class="btn-primary-red" @click="$emit('main-action')"> Get a free quote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      headline: '',
      subheadline: ''
    }
  },
  async fetch() {
    const {data} = await this.$axios.$get('homepage');
    this.headline = data.attributes.headline;
    this.subheadline = data.attributes.subheadline;
  }
}
</script>

<style scoped>

.hero-image {
  background-image: url("/hero-image-home.jpg");
  min-height: 40vh;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url("/hero-image-home.jpg");
    min-height: max(40vh, 400px);
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
}

</style>