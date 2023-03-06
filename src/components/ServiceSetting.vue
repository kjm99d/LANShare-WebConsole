<template>
  <v-sheet width="300" class="mx-auto">

    <v-text-field v-model="this.service_url" label="Service URL"></v-text-field>
    <v-btn type="button" v-on:click="this.test_status()" block class="mt-2">Connection Test</v-btn>

  </v-sheet>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      service_url: "http://localhost:5004"
    }
  },
  methods: {
    test_status() {
      axios.get(this.service_url + "/status")
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>