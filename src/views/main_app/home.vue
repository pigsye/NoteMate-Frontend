<template>
  <div class="header">
    <h1>NoteMate</h1>
    <router-link to="/login">Log-In</router-link>
    <router-link to="/logout">Log-Out</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Issac'
    }
  }
}
</script>

<style lang="scss">
  // import css files
  @import '@/assets/styles/main_app/main.scss';

body {
  position: fixed;
  width: 100%;
  min-height: 100%;
}
</style>
