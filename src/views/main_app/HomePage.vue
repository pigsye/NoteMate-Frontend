<template>
  <div class="main-app">
    <div class="left-side">
      <div class="spaces">
        <h1 class="title">{{ nameType }}</h1>
        <SpacesComponent :info="spaceItems.one"></SpacesComponent>
      </div>
    </div>
    <div class="right-side">
      <NotesEditor :info="notesInfo" />
    </div>
  </div>
</template>

<script>
import SpacesComponent from '@/components/main_app/SpacesComponent.vue'
import NotesEditor from '@/components/main_app/NotesEditor.vue'

export default {
  data () {
    return {
      nameType: 'Spaces',
      spaceItems: {
        one: {
          name: 'Space 1',
          selected: ''
        }
      },
      notesInfo: {
        topic: 'Cells'
      }
    }
  },
  components: {
    SpacesComponent,
    NotesEditor
  }
}
</script>
<style lang="scss">

</style>
