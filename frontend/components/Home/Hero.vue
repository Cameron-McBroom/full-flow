<template>
  <div class=" h-full bg-gradient-to-r from-ff-primary-blue to-ff-secondary-blue pt-14 text-white">
    <div class="max-w-screen-lg mt-20 text-center mx-auto">
      <div class="max-w-screen-sm mx-auto ">
        <h1 class="text-5xl font-extrabold"> {{ headline }} </h1>
        <p class="text-2xl my-6 font-semibold"> {{ subheadline }} </p>
        <button class="btn-primary-red text-lg font-semibold mb-6" @click="$emit('main-action')"> Get a free quote</button>

        <!-- Badges that show services      -->
        <div class="flex flex-wrap pt-4 gap-2 justify-center">
          <p v-for="service in shortServices" class="bg-white bg-opacity-10 px-2 py-1 rounded-lg "> {{service}} </p>
        </div>
      </div>
    </div>
    <svg
        class="sm:-mt-10 md:-mt-16 lg:-mt-28 xl:-mt-36"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,266.7C384,277,480,299,576,293.3C672,288,768,256,864,224C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      headline: '',
      subheadline: '',
      shortServices: [
          'Driveway clean',
          'Sealing',
          'Tinted sealing',
          'Roof clean',
          'Paver clean',
          'Fence clean',
          'Deck clean',
          'Softwash',
          'House wash',
          'Brick clean'
      ]
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

svg {
  fill: theme('colors.gray.100');
  scale: 101%;
}

.content-container {
  height: 50vh;
}

.hero-image {
  background-image: url("/hero-image-home.jpg");
  min-height: max(50vh, 500px);
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}


</style>