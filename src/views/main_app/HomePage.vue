<template>
  <div class="main-app">
    <div class="left-side">
      <div class="spaces">
        <h1 class="title">{{ nameType }}</h1>
        <SpacesComponent :info="spaceItems.one"></SpacesComponent>
      </div>
    </div>
    <div class="right-side">
      <!-- Dynamically rendering the component based on `currentComponent` -->
      <component :is="NotesEditor" v-if="currentComponent" :info="apiInfo.component?.componentInfo" />
      <h1 style="color:white">{{ apiInfo }}, {{ apiInfo.component?.componentname }}</h1>
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
      },
      currentComponent: 'NotesEditor', // For storing the dynamically imported component
      apiInfo: {} // For storing the API response data
    }
  },
  components: {
    SpacesComponent,
    NotesEditor: () => import('@/components/main_app/NotesEditor.vue')
  },
  mounted () {
    this.loadComponent()
  },
  methods: {
    async loadComponent () {
      try {
        // Fetch data from the API to determine which component to render
        const response = await fetch('/api/data')
        const data = await response.json()

        // Log the component name for debugging
        console.log('Component to load:', data.component.componentname)

        this.apiInfo = data

        // Dynamically import the correct component
        switch (data.component?.componentname) {
          case 'NotesEditor':
            this.currentComponent = () => import('@/components/main_app/NotesEditor.vue')
            console.log('bamewo')
            break
          case 'ChooseSubject':
            this.currentComponent = () => import('@/components/main_app/ChooseSubject.vue')
            console.log('owem')
            break
          case 'ChooseNotes':
            this.currentComponent = () => import('@/components/main_app/ChooseNotes.vue')
            console.log('mewo2')
            break
          default:
            console.error('Unknown component:', data.component.componentname)
            this.currentComponent = null // Fallback in case of an error
        }
      } catch (error) {
        console.error('Error loading component:', error)
      }
    }
  }
}
</script>
