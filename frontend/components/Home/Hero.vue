<template>
  <div class="h-full pt-16">
    <div class="hero-image h-full">
      <div class="max-w-screen-lg mx-auto h-full text-white md:text-cblue">
        <div class="md:bg-white p-5 max-w-sm absolute top-1/4  -translate-y-1/2">
          <h1 class="text-4xl font-bold"> Get your home painted by a pro </h1>
          <p class="text-xl my-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tincidunt lorem.</p>
          <button class="btn-primary-red" @click="$emit('main-action')"> Get a free quote</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  methods: {

  }
}
</script>

<style scoped>

.hero-image {
  background-image: url("../../assets/hero-image-home.jpg");
  min-height: 40vh;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url("../../assets/hero-image-home.jpg");
    min-height: 40vh;
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
}

</style>