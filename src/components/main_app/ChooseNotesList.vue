<template>
  <div class="listless">
    <h1>{{ info.name }}</h1>
    <p class="sample-notes">{{ info.sample }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChooseSubjectList',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
