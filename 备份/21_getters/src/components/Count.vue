<template>
    <div class="count">
        <h2>当前和为：{{ sum }}</h2>
        <!-- 表单输入修饰符用法：v-model.number,将用户输入的值自动转换为数字类型 -->
        <h3>欢迎来到{{ location }}，坐落于{{ address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">增加</button>
        <button @click="minus">减少</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'

const countStore = useCountStore()   // 使用pinia中的count数据

// storeToRefs只将store里数据转换为响应式数据，而方法不转换
const { sum,location,address } = storeToRefs(countStore)

// 数据
const n = ref(1)   // 用户选择的数字

//方法
function add() {
    countStore.increment(n.value)
}

function minus() {
    countStore.decrement(n.value)
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>