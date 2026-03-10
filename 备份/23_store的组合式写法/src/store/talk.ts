import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

// export const useTalkStore = defineStore('talk', {
//     actions: {
//         // 新增
//         async getLoveTalk() {
//             // 发请求，下面这行的写法是：连续解构赋值+重命名
//             let { data: { value: title } } = await axios.get('https://api.chucknorris.io/jokes/random')

//             // 把请求回来的字符串，包装成一个对象
//             let obj = { id: nanoid(), title }

//             // 放到数组中
//             this.talkList.unshift(obj)
// }
//     },
//     // 真正存储数据的地方
//     state() {
//         return {
//             // talkList 数组不写死存储初始值
//             // JSON.parse() 方法可以把 JSON 字符串转换成 JavaScript 对象
//             talkList: JSON.parse(localStorage.getItem('talkList') as string ) || []
//         }
//     }
// })

// store的组合式写法
import { reactive } from 'vue'
export const useTalkStore = defineStore('talk', () => {
    
    // 数据 这里的talkList 相当于state
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string ) || [])

    // getLoveTalk()函数相当于actions
    async function getLoveTalk() {
        // 发送请求
        let { data: { value: title } } = await axios.get('https://api.chucknorris.io/jokes/random')
        
        // 请求回来的字符串包装成一个对象
        let obj = { id: nanoid(), title }
        
        // 把对象放到数组中
        talkList.unshift(obj)
    }

    // 返回数据
    return {talkList,getLoveTalk}
})