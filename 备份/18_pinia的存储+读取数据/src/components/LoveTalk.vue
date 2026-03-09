<template>
    <div class="lovetalk">
        <button @click="getLoveTalk">获取每日诗句</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">
                {{ talk.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue'
import axios from 'axios';
import { nanoid } from 'nanoid'
import { useTalkStore } from '@/store/talk';

// 使用pinia中的talk的数据
const talkStore = useTalkStore()

// 诗句数据
// 方法
async function getLoveTalk() {
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    // let { data: { value: title } } = await axios.get('https://api.chucknorris.io/jokes/random')

    // 把请求回来的字符串，包装成一个对象
    // let obj = { id: nanoid(), title }

    // 放到数组中
    // talkList.unshift(obj)



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