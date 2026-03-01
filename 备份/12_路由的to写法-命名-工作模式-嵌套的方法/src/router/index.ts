// 创建一个路由器并暴露出去

// 第一步：引入createRouter函数和craateWebHistory函数
import { createRouter, createWebHistory } from 'vue-router'

// 引入需要使用的组件
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import News from '@/components/News.vue'
import Detail from '@/components/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器工作模式
    routes: [
        // 路由器规则
        {
            name: 'shouye', // 给路由命名
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            // 路由嵌套，子路由 news/detail
            children: [
                {   
                    name: 'xinwenDetail',
                    path: 'detail',
                    component: Detail
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 暴露router出去
export default router