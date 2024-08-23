<template>
  <div class="main-app">
    <div class="left-side">
      <div class="spaces">
        <h1 class="title">{{ nameType }}</h1>
        <SpacesComponent :info="spaceItems.one"></SpacesComponent>
      </div>
    </div>
    <div class="right-side">
    </div>
  </div>
</template>

<script>
import SpacesComponent from '@/components/main_app/SpacesComponent.vue'

export default {
  data () {
    return {
      nameType: 'Spaces',
      spaceItems: {
        one: {
          name: 'Space 1',
          selected: ''
        }
      }
    }
  },
  components: {
    SpacesComponent
  }
}
</script>
<style lang="scss">

</style>
