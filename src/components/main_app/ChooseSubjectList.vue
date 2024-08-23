<template>
  <div class="listless">
    <div class="icon"><img src="@/assets/icons/subjects.svg"></div>
    <h1>{{ info.name }}</h1>
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
