import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakPoints: {
    sm: 640,
    md: 768,
    lg: 1024
  }
})
