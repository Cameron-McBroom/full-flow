<template>
  <div ref="myNav" class="z-10 h-0 w-full fixed left-0 top-0 overflow-x-hidden transition-all duration-500 bg-black">

    <!-- Button to close the overlay navigation -->
    <button class="float-right text-6xl text-gray-400 text-gray-100 px-3" @click.prevent="closeNav">&times;</button>

    <!-- Overlay content -->
    <div class="relative flex flex-col gap-y-5 top-1/4 w-full text-center mt-20 text-gray-300 text-2xl duration-500">
      <a href="#" class="hover:text-gray-100">About</a>
      <a href="#" class="hover:text-gray-100" >Services</a>
      <a href="#" class="hover:text-gray-100">Clients</a>
      <a href="#" class="hover:text-gray-100">Contact</a>
    </div>

  </div>
</template>

<script>
import { faMoon } from '@fortawesome/free-solid-svg-icons';


export default {
  name: "MobileMenuOverlay",
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
    faMoon() { return faMoon }
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
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
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
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

</style>
