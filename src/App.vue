<template>
    <v-layout>
      <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" permanent theme="dark">
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Overview" value="Overview" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="FTP Service" value="supervisors" to="/ftp"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Setting" value="ServiceSetting" to="/setting"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <RouterView></RouterView>
      </v-main>
    </v-layout>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
