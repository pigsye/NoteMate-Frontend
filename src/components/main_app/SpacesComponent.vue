<template>
    <div :class="info.selected"><h1>{{ info.name }}</h1></div>
</template>

<script>
export default {
  name: 'SpacesComponent',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
