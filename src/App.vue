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
  margin: 0;
}

nav {
  background-color: black;
  height: 3rem;
  display: flex;
  align-items: center;

  .router-link {
    color: black;
    text-decoration: none;
  }

  .nav-mainIcon {
    font-family: Changa;
    font-weight: bold;
    font-size: 2rem;

    a {
      color: #BBA8FF;
      text-decoration: none;
    }

    a:hover,
    a:active,
    a:focus {
      color: #BBA8FF;
      text-decoration: none;
    }
  }

  .search-bar {
    margin-left: 1rem;
    /* Add your search-bar styles here */
  }
}
</style>
