// 引入createApp函数用于创建应用
import { createApp } from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由器
import router from './router'

// createApp(App).mount('#app')
// 改成
const app = createApp(App)

// 使用路由器
app.use(router)
// 挂载到整个应用到app容器中
app.mount('#app')
