<script>
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
</style>
