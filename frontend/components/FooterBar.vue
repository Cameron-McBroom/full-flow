<template>
  <div class="max-w-screen-lg mx-auto px-3 py-10 text-sm ">
    <div class="flex md:justify-between text-left md:flex-row flex-wrap gap-5">
      <div class="max-w-xl mr-8">
        <h3 class="font-bold text-base">Uplift Painting and Decorating</h3>
        <p>Licence No. 345470</p>
        <p>Kellyville Ridge NSW 2155</p>
        <p class="underline"><a href="tel:+61412857681">0412 857 681</a></p>
        <p class="underline"><a
            href="mailto:upliftpaintinganddecorating@gmail.com">upliftpaintinganddecorating@gmail.com</a>
        </p>
        <p>100% Satisfaction Guarantee</p>
      </div>

      <div class="max-w-xl mr-8">
        <h3 class="font-bold text-base">Services</h3>
        <p v-for="service in $store.state.services">
          <nuxt-link
              :to="`/service/${service.path}`"
              :key="service.name">
            {{ service.name }}
          </nuxt-link>
        </p>
      </div>

      <div class="max-w-xl mr-8">
        <h3 class="font-bold text-base">Service Areas</h3>
        <p v-for="area in $store.state.serviceAreas">
          <nuxt-link
              :to="`/area/${area.path}`"
              :key="area.name">
            {{ area.name }}
          </nuxt-link>
        </p>
      </div>
    </div>

    <p class="mt-5 py-2 border-t-2 border-white border-opacity-10 text-center">Designed and Developed by <a href="https://returnevolved.com" class="font-bold">Return Evolved</a> | Copyright 2022 Uplift Painting & Decorating</p>

  </div>
</template>
<script>
export default {
  name: 'footer-bar'
}
</script>
