<template>
  <header>
    <nav>
      <!-- DESKTOP -->
      <div class="desktop-site">
        <span class="nav-mainIcon">
          <router-link to="/app">NoteMate</router-link>
        </span>
        <div class="search-bar">
          <input>
          <button>Search</button>
        </div>
        <div class="right-bar">
          <div class="settings-icon">
            <img src="@/assets/icons/settings.svg" />
          </div>
          <div class="profile-picture">
          </div>
        </div>
      </div>
      <!-- MOBILE -->
      <div class="mobile-site">
        <button class="hamburger" v-on:click="hamburger_expand"><img :src='hamburger_icon' ></button>
        <button class="search"><img src="@/assets/icons/search.svg"></button>
        <div class="nav-mainIcon">
          <router-link to="/app">NoteMate</router-link>
        </div>
      </div>
    </nav>
  </header>
  <div class="mobile-site hamburger-items" v-if="hamburger_loaded">
          <div class="settings"><img src="@/assets/icons/settings.svg" /><span class="text">Settings</span></div>
          <div class="profile"><div class="profile-picture"></div><span class="text">Profile</span></div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      hamburger_icon: require('@/assets/icons/hamburger.svg'),
      hamburger_loaded: false
    }
  },
  methods: {
    hamburger_expand () {
      if (this.hamburger_loaded) {
        this.hamburger_loaded = false
        this.hamburger_icon = require('@/assets/icons/hamburger.svg')
      } else {
        this.hamburger_loaded = true
        this.hamburger_icon = require('@/assets/icons/close.svg')
      }
    }
  }
}
</script>
