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
import { useTalkStore } from '@/store/talk';
import { storeToRefs } from 'pinia'
import { m } from 'vue-router/dist/index-DFCq6eJK.js';

// 使用pinia中的talk的数据
const talkStore = useTalkStore()
// 将talkStore中的talkList转换为响应式数据
const { talkList } = storeToRefs(talkStore)

// $subscribe 订阅数据变化
// JSON.stringify 将talkList转换为字符串存储在localStorage中
talkStore.$subscribe((mutate, state) => {
    localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

// 方法
function getLoveTalk() {
    // 调用pinia中的actions方法
  talkStore.getLoveTalk()
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