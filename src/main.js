import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd, { version } from 'ant-design-vue'
console.log('ant-design-vue version:', version)

import 'ant-design-vue/dist/antd.less'

createApp(App).use(Antd).use(store).use(router).mount('#app')
