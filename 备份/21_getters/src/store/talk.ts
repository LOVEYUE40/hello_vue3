import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', {
    actions: {
        // 新增
        async getLoveTalk() {
            // 发请求，下面这行的写法是：连续解构赋值+重命名
            let { data: { value: title } } = await axios.get('https://api.chucknorris.io/jokes/random')

            // 把请求回来的字符串，包装成一个对象
            let obj = { id: nanoid(), title }

            // 放到数组中
            this.talkList.unshift(obj)
}
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList: [
                { id: '1', title: '长江一帆远，落日五湖春' },
                { id: '2', title: '落日醉醒问，一春无此寒' },
                { id: '3', title: '竹外一枝斜，想佳人，天寒日暮' }
            ]
        }
    }
})