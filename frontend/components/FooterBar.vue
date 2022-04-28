<template>
  <div class="bg-gradient-to-b from-ff-secondary-blue to-ff-primary-blue">
    <svg class="footer-wave sm:-mb-10 md:-mb-16 lg:-mb-28 xl:-mb-36"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,96L20,117.3C40,139,80,181,120,181.3C160,181,200,139,240,112C280,85,320,75,360,96C400,117,440,171,480,170.7C520,171,560,117,600,117.3C640,117,680,171,720,176C760,181,800,139,840,133.3C880,128,920,160,960,144C1000,128,1040,64,1080,80C1120,96,1160,192,1200,208C1240,224,1280,160,1320,128C1360,96,1400,96,1420,96L1440,96L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>

    <div class="max-w-screen-lg mx-auto px-3 py-10 text-sm">
      <img src="~assets/Logo.svg" alt="Full Flow Logo" width="100">
      <div class="flex md:justify-between text-left md:flex-row flex-wrap gap-5">
        <div class="max-w-xl mr-8">
          <h3 class="font-bold text-base">{{ $store.state.global.siteName }}</h3>
          <p>Emu Plains NSW 2750</p>
          <p class="underline"><a :href="'tel:+61' + $store.state.global.contactNumber.slice(1)"> {{ $store.state.global.contactNumber }} </a></p>
          <p class="underline"><a
              :href="'mailto:'+ $store.state.global.contactEmail">{{ $store.state.global.contactEmail }}</a>
          </p>
          <p>100% Satisfaction Guarantee</p>
          <div class="flex gap-3 text-base">
            <a href="https://www.facebook.com/fullflowpc/">
              <font-awesome-icon :icon="faFacbook"/>
            </a>
            <a href="https://www.instagram.com/fullflowpc/">
              <font-awesome-icon :icon="faInstagram"/>
            </a>
            <a :href="'mailto:' + $store.state.global.contactEmail">
              <font-awesome-icon :icon="faAt"/>
            </a>
          </div>
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

      <p class="mt-5 py-2 border-t-2 border-white border-opacity-10 text-center">Designed and Developed by <a
          href="https://www.returnevolved.com" class="font-bold">Return Evolved</a> | Copyright 2022 Full Flow Pressure Cleaning</p>

    </div>
  </div>
</template>
<script>

import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'footer-bar',
  computed: {
    faAt() {
      return faAt;
    },
    faFacbook() {
      return faFacebook;
    },
    faInstagram() {
      return faInstagram;
    },
  },
}
</script>

<style>
.footer-wave {
  fill: theme('colors.gray.100');
  scale: 101%;
}
</style>
