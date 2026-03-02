<template>
    <div class="lovetalk">
        <button @click="getLoveTalk">获取每日诗句</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">
                {{ talk.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue'
import axios from 'axios';
import { nanoid } from 'nanoid'

// 诗句数据
let talkList = reactive([
    { id: '1', title: '长江一帆远，落日五湖春' },
    { id: '2', title: '落日醉醒问，一春无此寒' },
    { id: '3', title: '竹外一枝斜，想佳人，天寒日暮' }
])

// 方法
async function getLoveTalk() {
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let { data: { value: title } } = await axios.get('https://api.chucknorris.io/jokes/random')

    // 把请求回来的字符串，包装成一个对象
    let obj = { id: nanoid(), title }

    // 放到数组中
    talkList.unshift(obj)



}

</script>

<style scoped>
.lovetalk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>