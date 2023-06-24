<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="chart-container main-layout">
    <h1>Bitcoin Stats</h1>
    <div v-if="priceHistory && avgBlockSize">
      <BarChart :data="priceHistoryData" :labels="getOptions" />
      <BarChart :data="avgBlockSizeData" :labels="getOptions" />
    </div>
  </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service'
import BarChart from '../cmps/Charts/BarChart.vue'

export default {
  data() {
    return {
      priceHistory: null,
      avgBlockSize: null,
    }
  },
  async created() {
    this.priceHistory = await bitcoinService.getMarketPriceHistory()
    this.avgBlockSize = await bitcoinService.getAvgBlockSize()
  },
  components: { BarChart },

  computed: {
    priceHistoryData() {
      return {
        labels: this.priceHistory.values.map(dataSample => {
          let date = dataSample.x
          date = new Date(date * 1000)
          return date.toISOString().split('T')[0]
        }),
        datasets: [
          {
            label: 'Average USD market price across major bitcoin exchanges.',
            backgroundColor: '#01BD7E',
            data: this.priceHistory.values.map(dataSample => dataSample.y),
          },
        ],
      }
    },
    avgBlockSizeData() {
      return {
        labels: this.avgBlockSize.values.map(dataSample => {
          let date = dataSample.x
          date = new Date(date * 1000)
          return date.toISOString().split('T')[0]
        }),
        datasets: [
          {
            label: 'The average block size in MB.',
            backgroundColor: '#01BD7E',
            data: this.avgBlockSize.values.map(dataSample => dataSample.y),
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
