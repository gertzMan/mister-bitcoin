import './assets/main.css'
import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiCurrencyBitcoin,
  BiTelephone,
  MdEmailOutlined,
  RiContactsLine,
  MdDeleteoutline,
  LaInfoCircleSolid,
} from 'oh-vue-icons/icons'

addIcons(
  BiCurrencyBitcoin,
  MdDeleteoutline,
  RiContactsLine,
  BiTelephone,
  MdEmailOutlined,
  LaInfoCircleSolid
)

const app = createApp(App)

app.use(router)

app.mount('#app')
app.component('v-icon', OhVueIcon)
