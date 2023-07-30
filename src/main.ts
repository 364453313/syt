import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
import App from './App.vue'
// 路由暴露的方法
import { initRouter } from "@/router"
// 引入全局组件
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue"

import ElementPlus from 'element-plus'
// 国际化文件
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

initRouter(app)

app.use(ElementPlus, {
  locale: zhCn,
})

app.mount("#app")
