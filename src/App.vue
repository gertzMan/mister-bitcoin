<script>
// import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'
export default {
  components: {
    AppHeader,
  },
}
</script>

<template>
  <AppHeader />
  <main class="main-content">
    <RouterView />
  </main>
  <!-- <AppFooter /> -->
</template>

<style scoped>
.main-content {
  min-height: calc(90vh - 4em);
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */
</style>
