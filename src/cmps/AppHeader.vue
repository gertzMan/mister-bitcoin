<template>
  <header class="app-header">
    <nav>
      <div class="left">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/stats">Chart</RouterLink>
      </div>

      <div v-if="user && exchgRate" class="right">
        <div>1 USD = {{ this.exchgRate }} BTC</div>
        <div>Logged in as: {{ this.user.name }}</div>
      </div>
    </nav>
  </header>
</template>

<script>
import { userService } from '../services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service.js'
export default {
  data() {
    return {
      user: null,
      exchgRate: null,
    }
  },
  async created() {
    this.user = await userService.getUser()
    this.exchgRate = await bitcoinService.getRate()
  },
}
</script>

<style lang="scss"></style>
