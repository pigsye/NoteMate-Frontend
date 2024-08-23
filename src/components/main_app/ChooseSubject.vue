<template>
<div class="subjects">
  <h1 class="TITLE">Subjects</h1>
  <div class="subjectss">
    <div v-for="(subject, key) in info" :key="key" class="list">
      <ChooseSubjectList :info="subject" />
    </div>
  </div>
</div>
</template>

<script>
import ChooseSubjectList from '@/components/main_app/ChooseSubjectList.vue'

export default {
  name: 'ChooseSubject',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: {
    ChooseSubjectList
  }
}
</script>
