import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // actions放置的是动作函数，用于响应组件中的动作（加减。。）
    actions: {
        // 加
        increment(value: number) {
            // 修改数据(this是当前的useCountStore)
            if (this.sum < 100) {
                this.sum += value
            }
        },

        // 减
        decrement(value: number) {
            if (this.sum > 1) {
                this.sum -= value
            }
        },
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            location: '北京公司',
            address: '中国北京'
        }
    }
})
