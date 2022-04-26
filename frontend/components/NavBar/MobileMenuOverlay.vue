<template>
  <div ref="myNav"
       class="z-10 h-0 w-full fixed left-0 top-0 overflow-x-hidden transition-all duration-500 bg-ff-primary-blue bg-opacity-100">

    <!-- Button to close the overlay navigation -->
    <button class="absolute text-4xl text-white opacity-60 top-4 right-4" @click.prevent="closeNav">&times;
    </button>

    <!-- Overlay content -->
    <div class="p-5 flex flex-col w-full text-left text-cblue text-xl duration-500">
      <div class="mx-auto mb-5">
        <img :src="$parseUrl($store.state.global.logo)" alt="logo" class="w-24 mb-2 mx-auto">
        <div class="flex gap-3 opacity-80 justify-between text-base">
          <a href="https://www.facebook.com/fullflowpc/">
            <font-awesome-icon :icon="faFacbook"/>
          </a>
          <a href="https://www.instagram.com/fullflowpc/">
            <font-awesome-icon :icon="faInstagram"/>
          </a>
          <a :href="'tel:+61' + $store.state.global.contactNumber.slice(1)">
            <font-awesome-icon :icon="faPhone"/>
          </a>
          <a :href="'sms:+61' + $store.state.global.contactNumber.slice(1)">
            <font-awesome-icon :icon="faMessage"/>
          </a>
          <a :href="'mailto:' + $store.state.global.contactEmail">
            <font-awesome-icon :icon="faAt"/>
          </a>
        </div>
      </div>

      <nuxt-link to="/">
        <div class="text-white flex justify-between items-center py-5 border-b-2 border-t-2 border-white border-opacity-10">
          <span> Home </span>
          <font-awesome-icon :icon="faChevronRight" class="text-md text-white opacity-20"/>
        </div>
      </nuxt-link>

      <nuxt-link to="/gallery">
        <div class="text-white flex justify-between items-center py-5 border-b-2 border-white border-opacity-10">
          <span> Gallery </span>
          <font-awesome-icon :icon="faChevronRight" class="text-md text-white opacity-20"/>
        </div>
      </nuxt-link>

      <nuxt-link to="/about">
        <div class="text-white flex justify-between items-center py-5 border-b-2 border-white border-opacity-10">
          <span> About </span>
          <font-awesome-icon :icon="faChevronRight" class="text-md text-white opacity-20"/>
        </div>
      </nuxt-link>

      <div class="py-5 border-b-2 border-white border-opacity-10">
        <div class="text-white flex justify-between items-center mb-2">
          <span> Services </span>
          <font-awesome-icon :icon="faChevronRight" class="text-md text-white opacity-20 fa-rotate-90"/>
        </div>
        <div class="text-white flex flex-col">
          <nuxt-link
              v-for="service in $store.state.services"
              :to="`/service/${service.path}`"
              :key="service.name"
              class="pl-5 text-lg">
            {{ service.name }}
          </nuxt-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import {faMessage, faPhone, faAt, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';


export default {
  name: "MobileMenuOverlay",
  props: {
    logoUrl: String
  },
  methods: {
    closeNav() {
      this.$refs.myNav.style.height = "0%";
      this.$emit('closed');
    },
    openNav() {
      this.$refs.myNav.style.height = "100%"
    }
  },
  computed: {
    faPhone() {
      return faPhone;
    },
    faAt() {
      return faAt;
    },
    faFacbook() {
      return faFacebook;
    },
    faInstagram() {
      return faInstagram;
    },
    faMessage() {
      return faMessage;
    },
    faChevronRight() {
      return faChevronRight;
    },
  },
  watch: {
    $route() {
      this.closeNav();
    }
  }
}
</script>

<style scoped>

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 0;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px
  }

  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

</style>
