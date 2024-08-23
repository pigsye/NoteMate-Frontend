<template>
  <div class="notes">
    <h1 class="TITLE">Notes</h1>
    <div class="notess">
      <div v-for="(subject, key) in info" :key="key" class="list">
        <ChooseNotesList :info="subject" />
      </div>
    </div>
  </div>
</template>

<script>
import ChooseNotesList from './ChooseNotesList.vue'

export default {
  name: 'ChooseNotes',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: {
    ChooseNotesList
  }
}
</script>
