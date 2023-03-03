<template>
  
  <RouterLink to="/hello" msg="aaa">Overview</RouterLink>
  <RouterLink to="/ftp" msg="aaa">FTP</RouterLink>
  <RouterView></RouterView>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'

export default {
  name: 'App',
  components: {
    RouterLink,
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
