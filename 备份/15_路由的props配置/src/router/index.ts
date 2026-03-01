// 创建一个路由器并暴露出去

// 第一步：引入createRouter函数和craateWebHistory函数
import { createRouter, createWebHistory } from 'vue-router'

// 引入需要使用的组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

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
                    path: 'detail/:id/:title/:content', // 注意：子路由的path不要加斜杠
                    component: Detail,
                    // props的布尔值写法：将路由收到的params参数以props的形式传递给路由Detail组件
                    //props: true
                    // props的函数写法：把返回的对象中每一组key-value作为props传给Detail组件
                    props(routes) {
                        return routes.params
                    }
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