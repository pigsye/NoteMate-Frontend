<template>
  <AppHeader></AppHeader>
  <router-view />
</template>

<script>
// import components
import AppHeader from '@/components/main_app/AppHeader.vue'

// vue things
export default {
  data () {
    return {
      name: 'Issac'
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  // import css files
  @import '@/assets/styles/main_app/main.scss';
</style>
