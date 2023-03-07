<template>
  <v-sheet width="300" class="mx-auto">
    <v-text-field v-model="this.service_url" label="Service URL"></v-text-field>

    <v-overlay v-model="IsLoading"/>


    <v-progress-linear v-if="IsLoading" color="primary" indeterminate rounded height="6"></v-progress-linear>
    <v-label v-else>{{ message }}</v-label>


    <v-btn type="button" v-on:click="this.test_status()" block class="mt-2">Connection Test</v-btn>
    
    



  </v-sheet>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      message : "테스트 대기중 ..",
      IsLoading : false,
      service_url: "http://localhost:5004"
    }
  },
  methods: {
    test_status() {
      this.IsLoading = true;
      

      axios.get(this.service_url + "/status")
        .then(res => {
          console.log(res)
          if (res.data.status_code === 200)
          {
            this.IsLoading = false;
            this.message = "테스트 연결 성공 !"
          }
        })
        .catch(err => {
          console.log(err)
          this.IsLoading = false;
            this.message = "테스트 연결 실패 !"
        })
    }
  }
}
</script>