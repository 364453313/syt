import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
import App from './App.vue'
// 路由暴露的方法
import { initRouter } from "@/router"
// 引入全局组件
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue"

const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

initRouter(app)

app.mount("#app")
