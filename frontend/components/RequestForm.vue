<template>
  <form class="p-4 grid gap-5 bg-white border border-gray-200" @submit.prevent="submitForm">
    <div>
      <label for="name" class="block">Name*</label>
      <input name="name" id="name" type="text" required v-model="form.name" enterkeyhint="next" @keypress.enter.prevent="focusOn('#email')"
             class="w-full bg-gray-100 h-12 border border-gray-200 p-2 rounded-none"/>
    </div>

    <div>
      <label for="email" class="block">Email*</label>
      <input name="email" id="email" type="email" required v-model="form.email" enterkeyhint="next" @keypress.enter.prevent="focusOn('#phone')"
             class="w-full bg-gray-100 h-12 border border-gray-200 p-2 rounded-none"/>
    </div>

    <div>
      <label for="phone" class="block">Phone*</label>
      <input name="phone" id="phone" type="tel" required v-model="form.phone" enterkeyhint="next" @keypress.enter.prevent="focusOn('#description')"
             class="w-full bg-gray-100 h-12 border border-gray-200 p-2 rounded-none"/>
    </div>

    <div>
      <label for="description" class="block">Description</label>
      <textarea name="description" id="description" v-model="form.description"
                class="w-full bg-gray-100 h-24 border border-gray-200 p-2 rounded-none"/>
    </div>

    <button class="btn-primary-red" :disabled="submitting">
      {{ submitting ? 'Loading...' : 'Get free quote' }}
    </button>

    <div class="font-bold" v-if="message"> {{ message }} </div>
  </form>
</template>

<script>
export default {
  name: "RequestForm",
  data() {
    return {
      submitting: false,
      message: '',
      form: {
        name: '',
        email: '',
        phone: '',
        description: ''
      }
    }
  },
  methods: {
    focusOn(id) {
      document.querySelector(id).focus();
    },
    async submitForm() {
      console.log("Submitting form");

      this.message = false;
      this.submitting = true;
      try {
        const response = await fetch('/.netlify/functions/requestQuote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        })

        const data = await response.json()

        console.log("Response from request back in vue: ", data);

        this.form = {
          name: '',
          email: '',
          phone: '',
          description: ''
        }

        this.submitting = false;
        this.message = 'Thanks for requesting a quote. We will be in touch to learn how we can help.'
      }
      catch (e) {
        console.log("Failed to submit form")
        this.message = 'There was an error trying to submit your request';
        this.submitting = false;

      }


    }
  }
}
</script>

<style scoped>

</style>