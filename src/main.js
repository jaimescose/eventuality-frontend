import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/router.js'
import i18n from '@/plugins/i18n.js'
import { apolloProvider } from '@/graphql/apollo.js'

Vue.config.productionTip = false
console.log(process.env.VUE_APP_GRAPHQL_ENDPOINT)
new Vue({
  router,
  i18n,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
