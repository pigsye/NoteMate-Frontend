<template>
  <nav>
    <span class="nav-link nav-mainIcon"><router-link to="/">NoteMate</router-link></span>
    <input class="search-bar">
    <router-view/>
  </nav>
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
@import '@/assets/styles/main.scss';

body {
  margin: 0px;
}

nav {
  background-color: black;
  height: 3rem;
}

.navbar-icon {
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 0.5rem;
  left: 0.5rem;
}

.navbar-mainicon {
  font-family: 'Changa';
  font-weight: bold;
}
</style>
