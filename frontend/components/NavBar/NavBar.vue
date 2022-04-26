<template>
  <nav ref="navBar" class="fixed top-0 px-2 py-1 w-full dark:bg-gray-900 sm:px-0 z-10 text-ff-text transition-all border-b-2 border-transparent">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">

      <!-- Mobile call icon when small      -->
      <div class="block md:hidden">
        <div class="flex gap-2">
          <a class="px-2 py-1 text-cblue" href="tel:+61412857681">
            <font-awesome-icon :icon="faPhone"/>
          </a>

          <a class="px-2 py-1 text-cblue" href="sms:+61412857681">
            <font-awesome-icon :icon="faMessage"/>
          </a>
        </div>
      </div>

      <nuxt-link to="/"  class="text-center">
        <div class="flex items-center">
          <img src="~assets/Logo.svg" alt="logo" class="h-16 p-2 mr-5 md:mr-0">
        </div>
<!--          <p class="pr-3 m-0 font-mono text-lg font-extrabold md:text-2xl md:pr-0">Return Evolved</p></div>-->
      </nuxt-link>

      <div class="flex">
        <div class="flex justify-between md:order-2">
          <button @click="openMenu" class="px-2 py-1 md:hidden">
            <svg class="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="hidden justify-between items-center w-full md:block slide-in-menu md:flex md:w-auto md:order-1 py-2">

          <ul class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:absolute md:transform md:left-1/2 md:-translate-x-1/2">
            <li>
              <nuxt-link to="/" class="btn-menu">Home</nuxt-link>
            </li>
            <li>
              <dropdown-button btn-text="Services" v-if="$store.state.services.length">
                  <nuxt-link v-for="service in $store.state.services" :key="service.name" :to="`/service/${service.path}`" class="hover:bg-gray-200 cursor-pointer px-5 py-3 transition-all duration-200">
                    {{ service.name }}
                  </nuxt-link>
              </dropdown-button>
            </li>
            <li>
              <nuxt-link to="/gallery" class="btn-menu">Gallery</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" class="btn-menu">About</nuxt-link>
            </li>
          </ul>
        </div>
        <mobile-menu-overlay ref="menuOverlay" @closed="mobileMenuShowing = false" :logoUrl="logoUrl"/>

      </div>
      <button @click="scrollToQuoteForm"
              class="text-sm hidden md:inline-block bg-black bg-opacity-5 px-3 pt-1 font-bold rounded">
        <span class="block">
        Free Quote </span>
        0426 437 739
      </button>
    </div>
  </nav>
</template>

<script>
import HamburgerButton from "@/components/NavBar/HamburgerButton";
import MobileMenuOverlay from "@/components/NavBar/MobileMenuOverlay";
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

export default {
  name: "NavBar",
  components: { HamburgerButton, MobileMenuOverlay },
  data() {
    return {
      logoUrl: '',
      mobileMenuShowing: false
    }
  },
  computed: {
    shouldShowMenu() {
      if (!(this.$mq === "sm")) return true
      return this.mobileMenuShowing
    },
    faMessage() {
      return faMessage;
    },
    faPhone() {
      return faPhone;
    },
    services() {
      return this.$store.state.services
    },
  },
  methods: {
    addScrollClasses() {
      if (window.scrollY >= 100) {
        this.$refs.navBar.classList.add('bg-gray-100')
        this.$refs.navBar.classList.add('border-gray-200')
        this.$refs.navBar.classList.remove('border-transparent')
        this.$refs.navBar.classList.remove('bg-transparent')
      }
      else {
        this.$refs.navBar.classList.remove('bg-gray-100')
        this.$refs.navBar.classList.remove('border-gray-200')
        this.$refs.navBar.classList.add('border-transparent')
        this.$refs.navBar.classList.add('bg-transparent')
      }
    },
    openMenu() {
      if (this.mobileMenuShowing) {
        this.$refs.menuOverlay.closeNav();
      } else {
        this.$refs.menuOverlay.openNav();
      }
      this.mobileMenuShowing = !this.mobileMenuShowing
    },
    scrollToQuoteForm() {
      document.querySelector('#quoteSection').scrollIntoView({behavior: 'smooth'})
    },
    async getLogoUrl() {
      const global = await this.$axios.$get('/global?populate[defaultSeo][populate][0]=shareImage')
      this.logoUrl = global.data.attributes.defaultSeo.shareImage.data.attributes.url
    },
    async fetchServices() {
      const res = await this.$axios.$get('/services');
      this.services = res.data.map(i => {
        console.log(i.attributes.name);

        return {
          path: i.attributes.name.replace(/ /g, '-').toLowerCase(),
          name: i.attributes.name
        }
      })

      console.log(this.services);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.addScrollClasses)
  },

  async fetch() {
    await this.getLogoUrl();
    // await this.fetchServices();
  }
}
</script>

<style>

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-enter-to, .slide-fade-leave {
  max-height: 500px;
  opacity: 100%;
}

.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

</style>
