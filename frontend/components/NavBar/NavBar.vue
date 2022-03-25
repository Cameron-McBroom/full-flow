<template>
  <nav class="fixed top-0 px-2 pb-2 w-full border-b-2 bg-gray-100 dark:bg-gray-900 sm:px-0 dark:border-gray-600">
    <div class="flex flex-wrap justify-between items-end mx-auto max-w-screen-lg">

      <!-- Mobile call icon when small      -->
      <div class="block md:hidden">
        <div class="flex">
          <a class="p-2 px-3 text-white bg-gradient-to-br from-blue-600 to-red-600 rounded-b-lg hover:bg-blue-800" href="tel:+61401817894">
            <font-awesome-icon :icon="faPhone"/>
          </a>

          <button class="p-2 px-3 ml-2 bg-black bg-opacity-5 rounded-b-lg transition-opacity duration-500 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 hover:bg-opacity-10" @click="toggleDarkMode">
            <font-awesome-icon :icon="faMoon"/>
          </button>
        </div>
      </div>

      <nuxt-link to="/"  class="text-center">
        <div class="flex items-center">
<!--          <img src="../../assets/Logo2.svg" alt="logo" class="w-14">-->
          <p class="pr-3 m-0 font-mono text-lg font-extrabold md:text-2xl md:pr-0">Return Evolved</p></div>
      </nuxt-link>

      <div class="flex">
        <div class="flex justify-between md:ml-5 md:order-2">
          <button
            class="hidden md:inline-block text-white bg-gradient-to-br from-blue-600 to-red-600  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-b-lg text-sm px-5 py-0 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            0401 817 894
          </button>

          <button @click="openMenu" class="p-2 pb-1 md:hidden">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="hidden justify-between items-center w-full md:block slide-in-menu md:flex md:w-auto md:order-1 py-2">

          <ul class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button class="pt-2 pb-1 px-3 bg-black bg-opacity-5 rounded transition-opacity duration-500 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 hover:bg-opacity-10" @click="toggleDarkMode">
                <font-awesome-icon :icon="faMoon"/>
              </button>
            </li>

            <li>
              <nuxt-link to="/" class="hover:text-blue-600">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio" class="hover:text-blue-600">Portfolio</nuxt-link>
            </li>
          </ul>
        </div>

        <mobile-menu-overlay ref="menuOverlay" @closed="mobileMenuShowing = false"/>

      </div>
    </div>
  </nav>
</template>

<script>
import HamburgerButton from "@/components/NavBar/HamburgerButton";
import MobileMenuOverlay from "@/components/NavBar/MobileMenuOverlay";
import { faMoon, faPhone } from '@fortawesome/free-solid-svg-icons';

export default {
  name: "NavBar",
  components: { HamburgerButton, MobileMenuOverlay },
  data() {
    return {
      mobileMenuShowing: false
    }
  },
  computed: {
    shouldShowMenu() {
      if (!(this.$mq === "sm")) return true
      return this.mobileMenuShowing
    },
    faMoon() {
      return faMoon;
    },
    faPhone() {
      return faPhone;
    }
  },
  methods: {
    openMenu() {
      if (this.mobileMenuShowing) {
        this.$refs.menuOverlay.closeNav();
      } else {
        this.$refs.menuOverlay.openNav();
      }
      this.mobileMenuShowing = !this.mobileMenuShowing
    },
    toggleDarkMode() {
      document.body.classList.toggle("dark");
    }
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
