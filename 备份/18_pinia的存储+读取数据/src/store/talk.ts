import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
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