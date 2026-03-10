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
import { useTalkStore } from '@/store/talk';

// 使用pinia中的talk的数据
const talkStore = useTalkStore()

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