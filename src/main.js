import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd, { version } from 'ant-design-vue'
console.log('ant-design-vue version:', version)

import 'ant-design-vue/dist/antd.less'

router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let meta = document.createElement('meta')
    document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
createApp(App).use(Antd).use(store).use(router).mount('#app')
