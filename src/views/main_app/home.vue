<template>
  <RouterLink to="/app">A</RouterLink>
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
