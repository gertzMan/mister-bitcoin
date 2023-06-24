<template>
  <Hero />
  <div class="greeting-container main-layout" v-if="user && exchgRate">
    <h1>
      Hello <span>{{ this.user.name }}</span
      >,
    </h1>
    <div class="balance-desc">
      <p>Your balance is: {{ this.user.balance }}</p>
      <v-icon class="bitcoin-logo" name="bi-currency-bitcoin" scale="1.8" />
    </div>

    <h2>Currently 1 USD is worth {{ this.exchgRate }} BTC</h2>
  </div>
</template>
BiCurrencyBitcoin
<script>
import { userService } from '../services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service.js'
import Hero from '../cmps/Hero.vue'
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

  methods: {},
  components: { Hero },
}
</script>

<style lang="scss" scoped></style>
